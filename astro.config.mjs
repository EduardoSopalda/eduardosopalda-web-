// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.eduardosopalda.com',
  prefetch: true,
  build: {
    inlineStylesheets: 'always',
  },
});
