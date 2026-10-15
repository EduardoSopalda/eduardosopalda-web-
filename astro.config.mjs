// @ts-check
import { defineConfig } from 'astro/config';
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Berlin opening: 26 Oct 2026, 10:00 CET (same moment as BERLIN_OPENS in
// src/data/berlin.ts). The Berlin page's chapter stills live in
// public/out-loud/berlin/ and are only referenced by the OPEN build;
// a closed build drops the folder from the output entirely, so nothing
// about the film ships before the talk.
const BERLIN_OPENS = Date.parse('2026-10-26T10:00:00+01:00');
const berlinOpen = process.env.BERLIN_OPEN === '1' || Date.now() >= BERLIN_OPENS;

const berlinStills = {
  name: 'berlin-stills-embargo',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      if (berlinOpen) return;
      await rm(fileURLToPath(new URL('out-loud/berlin/', dir)), { recursive: true, force: true });
    },
  },
};

// IONOS Hosting Plus serves a plain static export over SFTP -- no Node
// runtime, so no adapter and no server-rendered routes. Both /api routes
// that used to need one are gone (see src/pages/contact.astro and
// src/pages/out-loud/automa-chem-2026.astro).
export default defineConfig({
  site: 'https://www.eduardosopalda.com',
  output: 'static',
  integrations: [berlinStills],
  prefetch: true,
  build: {
    inlineStylesheets: 'always',
  },
});
