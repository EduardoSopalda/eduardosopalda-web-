// @ts-check
import { defineConfig } from 'astro/config';

// IONOS Hosting Plus serves a plain static export over SFTP -- no Node
// runtime, so no adapter and no server-rendered routes. Both /api routes
// that used to need one are gone (see src/pages/contact.astro and
// src/pages/out-loud/automa-chem-2026.astro).
export default defineConfig({
  site: 'https://www.eduardosopalda.com',
  output: 'static',
  prefetch: true,
  build: {
    inlineStylesheets: 'always',
  },
});
