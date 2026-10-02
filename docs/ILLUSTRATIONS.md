# Illustrations

## Purpose

Article images live separately from prose. They are chosen with the same care as a line. One image per article. Depth, mood, and context are negotiated by Eduardo; you source the candidates and he approves the final selection.

## Sourcing and storage

- Store originals in `assets/illustrations/` with descriptive names, no spaces.
- Format: `article-slug-illustration.ext` (e.g. `meaning-negotiation-illustration.jpg`).
- Submit 3–5 candidates per article. Include the article slug, approximate dimensions, and source/credit in a message.
- Once approved, a single image becomes canonical.

## Frontmatter

Each article entry in `content/` gains an optional `illustration` field:

```yaml
---
title: Article Title
illustration: article-slug-illustration.jpg
---
```

If the field is omitted, the article appears without an image.

## Display rules

- **Room view**: Full bleed above the title. Same specimen system (depth, opacity, parallax, focus behaviour).
- **Reader view**: The plate image at the top of the page, receding as you scroll.
- **Field**: No illustrations. Fragments and specimens only.
- **Archive**: No illustrations. Text only.

## Technical

Images are served from `/illustrations/` in public. Astro components receive the slug and resolve the asset.

Illustrations use the same variable depth logic as specimens. They do not override the specimen layer; they are a separate, closer layer behind the text.

All images must load. No lazy loading, no error states. If an illustration is missing, the build warns and continues without it.

## Accessibility

Every illustration has an alt text. Store this in a JSON sidecar or frontmatter extension, keyed to the image file.

Example sidecar at `assets/illustrations/article-slug-illustration.json`:

```json
{
  "alt": "Description of the image for screen readers"
}
```

Or frontmatter:

```yaml
illustration: article-slug-illustration.jpg
illustrationAlt: Description of the image for screen readers
```

The second approach is preferred to keep context and content together.

## What to do first

- Confirm storage location (public or assets).
- Confirm frontmatter schema with current articles.
- Once approved, ask Eduardo for the first batch of article–illustration pairs.
