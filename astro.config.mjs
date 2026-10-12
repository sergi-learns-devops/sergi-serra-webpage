// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sserra.dev',
  i18n: {
    locales: ['ca', 'en', 'es'],
    defaultLocale: 'ca',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
