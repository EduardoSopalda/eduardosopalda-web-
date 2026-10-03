// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.eduardosopalda.com',
  output: 'static',
  adapter: vercel(),
  prefetch: true,
  build: {
    inlineStylesheets: 'always',
  },
});
