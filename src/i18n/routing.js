import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar', 'es', 'it'],
  defaultLocale: 'en',
  detectBrowserLanguage: false,
  cookie: {
    name: 'language',
    path: '/',
    maxAge: 365 * 24 * 60 * 60, // مدة صلاحية الـ Cookie
  },
});

