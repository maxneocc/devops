import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cyber terminal aesthetic
        'cyber': {
          'deep': '#0a0a0f',
          'surface': '#12121a',
          'elevated': '#1a1a24',
          'border': '#2a2a3a',
        },
        'accent': {
          'cyan': '#00f0ff',
          'green': '#39ff14',
          'warm': '#ff6b35',
          'cyan-muted': '#00f0ff80',
        },
        'text': {
          'primary': '#e8e8e8',
          'secondary': '#a0a0a0',
          'muted': '#6b7280',
        },
      },
      fontFamily: {
        'display': ['var(--font-bebas)', 'Impact', 'sans-serif'],
        'body': ['var(--font-sora)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-jetbrains)', 'Consolas', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 12vw, 8rem)', { lineHeight: '0.95', letterSpacing: '0.02em' }],
        'section': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1', letterSpacing: '0.02em' }],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'typewriter': 'typewriter 2s steps(40) forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'typewriter': {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, rgba(0,240,255,0.03) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(0,240,255,0.03) 1px, transparent 1px)`,
        'radial-glow': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-cyber': 'linear-gradient(135deg, #00f0ff 0%, #39ff14 50%, #00f0ff 100%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px rgba(0, 240, 255, 0.3)',
        'glow-green': '0 0 40px rgba(57, 255, 20, 0.3)',
        'glow-warm': '0 0 40px rgba(255, 107, 53, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
