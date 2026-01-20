import type { Locale } from './i18n';

const dictionaries = {
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
};

// Cache dictionaries to avoid repeated imports
const cache = new Map<Locale, Awaited<ReturnType<typeof dictionaries.fr>>>();

export const getDictionary = async (locale: Locale) => {
  // Return cached dictionary if available
  if (cache.has(locale)) {
    return cache.get(locale)!;
  }

  // Load and cache the dictionary
  const dict = await dictionaries[locale]();
  cache.set(locale, dict);
  return dict;
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
