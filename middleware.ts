import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale } from './lib/i18n';

function getLocaleFromHeaders(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;

  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, priority = 'q=1'] = lang.trim().split(';');
      const q = parseFloat(priority.split('=')[1] || '1');
      return { code: code.split('-')[0].toLowerCase(), q };
    })
    .sort((a, b) => b.q - a.q);

  // Find first matching locale
  for (const { code } of languages) {
    if (isValidLocale(code)) {
      return code;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Security: Validate pathname to prevent open redirect attacks
  // Block paths starting with // or containing protocol schemes
  if (
    pathname.startsWith('//') ||
    pathname.includes('://') ||
    pathname.includes('\\')
  ) {
    // Return 400 Bad Request for malicious paths
    return new NextResponse('Bad Request', { status: 400 });
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Skip for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files like .ico, .png, etc.
  ) {
    return NextResponse.next();
  }

  // Detect locale from headers or use default
  const locale = getLocaleFromHeaders(request);

  // Redirect to locale-prefixed path
  // Use only the pathname to prevent external redirects
  const safePath = pathname.replace(/^\/+/, '/'); // Normalize multiple slashes
  const newUrl = new URL(`/${locale}${safePath}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!_next|api|.*\\..*).*)',
  ],
};
