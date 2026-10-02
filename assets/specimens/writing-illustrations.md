# Writing illustrations

## Purpose

Writing illustrations are the visual counterpoint to Eduardo's prose. They are not decoration. They are small, precise, atmospheric images that help a reader feel the argument without turning the page into a gallery.

The rule is simple: the writing remains primary, the illustration supports it, and the image never asks for attention louder than the sentence.

## Where this lives

This file lives in the public asset area so it can be referenced directly from the site:

- `assets/specimens/`
- public-facing references may resolve from `/specimens/...`

Use this for non-article reference images, specimen studies, and illustrative treatments that are intended to live with the public-facing writing system.

## Intended use

Use writing illustrations for:

- editorial moments in article layouts
- atmospheric support for a specific essay or section
- close-up references that echo the field's visual logic
- compositions that feel like fragments of a larger system, not standalone stock imagery

Do not use them for:

- generic photography with no narrative relationship to the piece
- decorative filler
- large format hero images that compete with the typography
- anything that requires a manifesto-like explanation in order to make sense

## Visual behaviour

Writing illustrations should feel like they belong to the same system as the site:

- restrained palette
- controlled contrast
- a quiet sense of depth
- a little tension between order and drift
- enough texture to feel human, never overworked

They should be serious enough to carry the argument, but not solemn. They are an extension of the site's tone: warm, dry, slightly surreal, still readable.

## Image rules

- Keep the file names descriptive and stable.
- Prefer one canonical file per concept.
- Keep dimensions large enough for full bleed in an article layout.
- Keep a public, readable source path.
- Use alt text with a practical description of the image, not a marketing sentence.

Recommended format:

- `writing-illustration-[slug].jpg`
- `writing-illustration-[slug].png`
- `writing-illustration-[slug].webp`

Example:

- `writing-illustration-memory.jpg`
- `writing-illustration-basement.jpg`
- `writing-illustration-library-burns.jpg`

## Metadata

Each illustration should carry a minimal metadata record if it is used in the content model. The simplest pattern is:

```yaml
illustration:
  image: /specimens/writing-illustration-memory.jpg
  alt: A dark, layered composition of paper, light, and fragments suggesting memory and decay.
  caption: null
```

If no caption is provided, the image should still work as a quiet visual support. It should not force a title or explanatory phrase unless the article genuinely needs it.

## Placement

In article layouts:

- place the illustration directly after the opening paragraph or section break
- let the text carry the emotional rhythm
- maintain generous margins and spacing
- avoid using multiple illustrations in the same article unless the structure truly requires it

In the full site:

- the field never shows article illustrations
- the archive remains text-only
- the reader view is the primary place for illustration placement

## Tone

The illustration should feel as if it were found inside Eduardo's thinking, not added from outside it.

This means:

- not slick
- not generic
- not obviously designed for ad performance
- not over-explained
- not too literal

A useful test: if a person reads the article with the image turned off, the argument should still stand. If the image is removed, the piece should not feel broken, only a little less inhabited.

## Production note

When a new writing illustration is added, the work is not finished until there is:

1. a public asset file in `assets/specimens/`
2. an alt description
3. a clear placement decision in the article
4. a check that the image holds tone without dominating the page

The image should feel like a line from the same notebook as the prose: useful, a little strange, and impossible to confuse with generic web decoration.
