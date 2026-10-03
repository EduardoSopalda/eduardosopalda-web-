// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.eduardosopalda.com',
  output: 'static',
  adapter: vercel({
    includeFiles: [
      './private/berlin/film.mp4',
      './private/berlin/roadmap.pdf',
      './private/berlin/00.jpg',
      './private/berlin/01.jpg',
      './private/berlin/02.jpg',
      './private/berlin/03.jpg',
      './private/berlin/04.jpg',
      './private/berlin/05.jpg',
      './private/berlin/06.jpg',
    ],
  }),
  prefetch: true,
  build: {
    inlineStylesheets: 'always',
  },
});
