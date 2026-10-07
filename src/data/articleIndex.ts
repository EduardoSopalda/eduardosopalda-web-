// Stable per-article catalogue numbers, No.01-No.25, derived from
// content/_index.json's own real `date` field (chronological, oldest
// first) -- not invented. Generated once by sorting the real content
// index and matching titles against fragments.ts's own `source`
// strings (normalizing curly vs. straight quotes, since the two files
// use different quote styles for the same titles). Regenerate by
// re-running that same sort/match if a new article is added -- do not
// hand-assign a number to a new entry, since that would break the
// "stable, chronological" property this is supposed to guarantee.
export const ARTICLE_CATALOG: Record<string, number> = {
  '“TODO EL MUNDO ES UN PAÍS” Everyone is a country… Inspired by Goya’s silent truths': 1,
  '"Can I Call You Uncle Too?" On unexpected mentors, timeless advice, and the art of never stopping learning': 2,
  'Crisis Management 101: The Morning Everything Went Wrong (and I Survived)': 3,
  // No.4-6, 10, 13, 15-16, 18 below were simply missing from the first
  // pass -- confirmed directly against content/_index.json's own real
  // dates (No.01-25, oldest first), not invented. None of these seven
  // are cited by any fragment in fragments.ts, so there's no raw
  // quote-style key to match there; the exact content/_index.json
  // title (straight quotes) is enough, since /writing's own lookup
  // (catalogNoForTitle) normalizes quote style on both sides already.
  'To My Friends in Tech: A Letter of Admiration': 4,
  '“Knowing the Ingredients Isn’t Enough” – The Scientific Method According to a Hibiscus Margarita': 5,
  'Emotional Intelligence in the Age of Artificial Intelligence': 6,
  'Strada Maestra: Lessons from an Italian Curve': 7,
  'Why the Smarter AI Isn\'t the One That Predicts': 8,
  'Speed Dating with AI: Shopping Around': 9,
  'Speed Dating with AI: Vertex AI': 10,
  'Speed Dating with AI: Grok': 11,
  'Speed Dating with AI: ChatGPT': 12,
  'Speed Dating with AI: Perplexity – The Footnote Prince': 13,
  'Speed-Dating with AI: The GitHub Copilot': 14,
  'AI Governance: The Silent Framework That Is Already Changing the Rules of the Game': 15,
  'Data Are Not Universal': 16,
  'Responsible AI in Times of Chaos: Why Trust Is Not a Feature': 17,
  'Lessons from the DAMA ESPAÑA × Gaia-X Hub España webinar on data spaces': 18,
  'From Stewardship to Partnership: Why GenAI in Data Governance Is No Longer “The Future”': 19,
  "ATLAN'S Great Data Debate: DATA, Dashboards, AI, and the Fragility of Meaning": 20,
  'Starting the AI Journey: From First Wave to Business-Ready AI': 21,
  'When Governance Lives in Memory… and When It Becomes Muscle': 22,
  'If We Can’t Agree on “Customer,” How Can We Ever Govern Data?': 23,
  'The Data Is My Shepherd, I Shall Not Want': 24,
  'Ten Thousand Files, Two Thousand That Mattered': 25,
};

// content/_index.json's `title` field uses straight quotes throughout;
// the keys above keep fragments.ts's original curly-quote/backslash
// style. Normalize both sides through this before comparing titles from
// _index.json against this catalogue (used by /writing).
const normalizeQuotes = (s: string) =>
  s.replace(/\\'/g, "'").replace(/[‘’]/g, "'").replace(/[“”]/g, '"');

const NORMALIZED_CATALOG: Record<string, number> = Object.fromEntries(
  Object.entries(ARTICLE_CATALOG).map(([k, v]) => [normalizeQuotes(k), v])
);

export function catalogNoForTitle(title: string): number | null {
  return NORMALIZED_CATALOG[normalizeQuotes(title)] ?? null;
}

// Real per-article slugs (the content collection's own entry.id, which
// is just each file's name minus ".md" -- the glob loader's default),
// keyed by title the same normalized way as the catalogue above. This
// is what makes a fragment's citation, and eventually the fragment
// itself, a real link instead of the dead end docs/BRIEF.md's own
// definition of a fragment says it shouldn't be: "linking back to the
// paragraph it came from."
import articles from '../../content/_index.json';

const NORMALIZED_SLUGS: Record<string, string> = Object.fromEntries(
  articles.map((a) => [normalizeQuotes(a.title), a.file.replace(/\.md$/, '')])
);

export function slugForTitle(title: string): string | null {
  return NORMALIZED_SLUGS[normalizeQuotes(title)] ?? null;
}

// The one real pull-quote for an article's own catalogue/reader
// treatment -- Eduardo's own line, already curated into fragments.ts,
// not a new sentence pulled from the body. Prefers a short-weight
// fragment (reads better as a large display headline than a long one)
// but falls back to whatever exists. Only 17 of 25 articles have any
// fragment at all -- callers MUST handle null, not assume one exists.
import { FRAGS } from './fragments';

export function leadFragmentFor(title: string): string | null {
  const norm = normalizeQuotes(title);
  const matches = FRAGS.filter((f) => f.source && normalizeQuotes(f.source) === norm);
  if (!matches.length) return null;
  return (matches.find((f) => f.weight === 'short') ?? matches[0]).text;
}

// The one row-shape both /writing and every /thread/[name] page build
// their list from -- catalogue number and lead fragment are both
// derived the same way in both places, so this used to be the same
// three lines typed twice and drifting the moment one of them changed
// how a fragment gets picked. entry.data is spread first so family/
// image/dek/people/question all ride along too, for callers (today
// just /writing's own awake-plate search) that need more than the
// list row itself does.
import type { CollectionEntry } from 'astro:content';

export function toArticleRow(entry: CollectionEntry<'articles'>) {
  return {
    ...entry.data,
    id: entry.id,
    no: catalogNoForTitle(entry.data.title),
    lead: leadFragmentFor(entry.data.title),
  };
}
