# eduardosopalda.com

Start with `CLAUDE.md`.

```
CLAUDE.md               instructions and non negotiables, read first
docs/BRIEF.md           what the site is, the voice, the seven stops, the content model
docs/DESIGN-SYSTEM.md   colour, type, compositing, motion — plus a log of real
                        landing-page decisions made past the original spec
docs/FIELD-SPEC.md      the field, the decay rule, the transitions
docs/BUILD-ORDER.md     what to build in what order
docs/CONTENT-FORMAT.md  how a new article is added

content/                25 real articles, front matter plus body, and _index.json
fragments/              50 fragments chosen by Eduardo, each linked to its source
assets/specimens/       10 reference images, void and lit families (candidate
                        replacements — the "DATA"-tagged specimen menagerie — are
                        still pending final selection, see chat history)
prototype/field.html    working reference: landing, drift, decay, nerve, seven stops

src/                    the actual Astro build, in progress. Currently built: the
                        landing (src/components/Landing.astro) and the field
                        (src/components/Field.astro) — drift, decay, the nerve, the
                        seven stops as real links; /writing as a real archive over
                        the Astro content collection; a reader for individual
                        articles. Context (formerly Manifesto), Lexicon, Out Loud, First Dates, Who,
                        and Contact exist as honest TODO shells — real routes, no
                        invented copy, waiting on Eduardo's own words per
                        CLAUDE.md's non-negotiable 1. Not yet built: /archive,
                        /thread/[name], /with/[person].
```

Open `prototype/field.html` in a browser to see the reference before changing `src/`.
