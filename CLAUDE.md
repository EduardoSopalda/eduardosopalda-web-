# eduardosopalda.com

Read this file first, then `docs/BRIEF.md`, then `docs/FIELD-SPEC.md`.

Pre-launch audit (4 Oct 2026): `docs/AUDIT-2026-10-04.md` — launch blockers, design/motion/type findings, and the prioritised action plan. Read it before making launch changes.

Open `prototype/field.html` in a browser before writing any code. It is the reference
implementation of the hardest part of the site and it already works.

## What this is

A personal site for Eduardo Sopalda, senior data and AI governance lead at dsm-firmenich
and dedicated data governance lead for its sustainability division. Trained as an architect.
Writes about data, AI and the human experience. Based in Barcelona.

It is not a consultancy site, a portfolio or a funnel. Eduardo has an exclusivity contract
and cannot take outside work, so nothing on the site is for sale. That constraint is honest
and should be visible rather than hidden.

The site exists to let a stranger stand inside his way of thinking for a few minutes and
leave understanding one thing better than when they arrived.

## Non negotiables

1. **Never write copy in Eduardo's voice.** Every sentence on this site is his or is
   marked as placeholder. If a page needs words that do not exist yet, leave the section
   empty with a visible TODO. Inventing plausible sentences is the single worst thing you
   can do here.
2. **The field is the navigation.** No menu bar, no hamburger, no THINK / SPEAK / MAKE
   sections. Seven stops ride the nerve. That is the menu.
3. **No titles in the field.** Fragments only. Metadata appears in rooms, never in the field.
4. **The reader is calm.** No related posts, no share buttons, no reading time, nothing
   floating while someone is mid paragraph. Everything appears after the last sentence.
5. **Fragment decay is load bearing.** It is the Wittgenstein argument running as physics,
   not a decoration. Do not simplify it into a fade.
6. **One accent colour.** Gold appears on the nerve, its beads, and whatever is awake.
   Nowhere else. It is powerful because it is scarce.
7. **Reader pages must work with JavaScript off.** The field is one client island.
8. **No em dashes or en dashes in any prose you write.** Use full stops and commas.
9. **Do not add tracking, analytics, cookie banners, newsletter capture or contact forms.**
   The contact mechanism is the question each article ends on.

## Stack

Astro with content collections. Markdown in git, `/content` is the database.
Self host the variable fonts and honour the optical size axis. Deploy on Cloudflare Pages.
No CMS in v1.

## Repo layout to produce

```
src/
  pages/            index (field), context, writing, writing/[slug],
                    lexicon, out-loud, first-dates, who, contact,
                    thread/[name], with/[person], archive, 404
  components/       Field (client island), Nerve, Specimen, Fragment, Reader, Spine
  content/          articles collection, fragments, stops
  styles/           tokens.css
public/specimens/   the images in assets/specimens
```

## What is already done

- `content/` 25 real articles with front matter. Thread and kind values were assigned by
  keyword on first ingest and are a first pass. Six Speed Dating titles were reconstructed.
  Treat both as provisional and do not silently correct them.
- `fragments/fragments.md` 50 fragments chosen by Eduardo, each linked to its source.
- `assets/specimens/` ten images. Names ending in a dark background are void family.
  vitrine, white-hall and library are lit family. See `docs/DESIGN-SYSTEM.md`.
- `prototype/field.html` working field: landing, drift, decay, nerve, seven stops.

## What is not done and needs Eduardo, not you

Context text (the stop formerly called Manifesto). Lexicon entries. Out Loud entries, he
is transcribing them. Contact page
copy. Article images. Whether the site publishes first or archives from LinkedIn.
