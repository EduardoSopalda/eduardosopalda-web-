// Shared fragment pool -- previously duplicated between the field and
// the landing would have meant two sources of truth for the same 50
// lines. Extracted here so Field.astro's continuous world and
// Landing.astro's rotating hero quote both read from one place.
//
// "source" is the real article title each fragment was lifted from
// (content/_index.json), not invented — matches fragments.md's own
// arrow-target links, resolved to human-readable titles. Fragments
// tagged "site" in the source file aren't from any article (a line
// about the site itself), so they carry no source and callers just
// omit the reference line for those.
//
// "year" is the real publication year, matched by source title against
// content/_index.json's own date field -- not invented, and left
// unset (never guessed) for the one fragment with no source at all.
// No "href" field here: a real per-article URL exists now
// (/writing/[slug]), so a fragment's link is resolved at render time
// via articleIndex.ts's slugForTitle(source) instead of being baked
// into this data -- one lookup to keep in sync, not fifty.
export type Fragment = {
  text: string;
  thread: string;
  weight: 'short' | 'long';
  source: string | null;
  year?: number;
  lang?: string;
};

export const FRAGS: Fragment[] = [
  { text: 'Governance without proximity is just opinion with a logo.', thread: 'MEANING', weight: 'short', source: 'The Data Is My Shepherd, I Shall Not Want', year: 2026 },
  { text: 'That, my friends, is semantic chaos.', thread: 'MEANING', weight: 'short', source: 'If We Can’t Agree on “Customer,” How Can We Ever Govern Data?', year: 2026 },
  { text: 'Spoiler: nobody ever finds them.', thread: 'MEANING', weight: 'short', source: 'If We Can’t Agree on “Customer,” How Can We Ever Govern Data?', year: 2026 },
  { text: 'You cannot build a data-quality penthouse on semantic quicksand.', thread: 'MEANING', weight: 'short', source: 'If We Can’t Agree on “Customer,” How Can We Ever Govern Data?', year: 2026 },
  { text: 'Ask five people across one company what "revenue" means and you will get eight answers.', thread: 'MEANING', weight: 'long', source: 'If We Can’t Agree on “Customer,” How Can We Ever Govern Data?', year: 2026 },
  { text: 'Everyone guards their terminology like national heritage.', thread: 'MEANING', weight: 'short', source: 'If We Can’t Agree on “Customer,” How Can We Ever Govern Data?', year: 2026 },
  { text: 'That is archaeology, not governance.', thread: 'MEANING', weight: 'short', source: 'If We Can’t Agree on “Customer,” How Can We Ever Govern Data?', year: 2026 },
  { text: 'Wittgenstein is still making data people uncomfortable. Good. We deserve it.', thread: 'MEANING', weight: 'long', source: 'The Data Is My Shepherd, I Shall Not Want', year: 2026 },
  { text: 'A document waiting to be ignored.', thread: 'MEANING', weight: 'short', source: 'The Data Is My Shepherd, I Shall Not Want', year: 2026 },
  { text: 'Asking the right question is key to getting the right results.', thread: 'MEANING', weight: 'short', source: "Why the Smarter AI Isn't the One That Predicts", year: 2025 },
  { text: 'Governance becomes a narrative, not a reflex.', thread: 'GOVERNANCE', weight: 'short', source: 'When Governance Lives in Memory… and When It Becomes Muscle', year: 2026 },
  { text: 'Most organizations already have governance. What they lack is practice.', thread: 'GOVERNANCE', weight: 'short', source: 'When Governance Lives in Memory… and When It Becomes Muscle', year: 2026 },
  { text: 'That is the day governance stops being memory. And starts being muscle.', thread: 'GOVERNANCE', weight: 'long', source: 'When Governance Lives in Memory… and When It Becomes Muscle', year: 2026 },
  { text: 'Tools do not replace culture. But they prevent culture from breaking at the first tight deadline.', thread: 'GOVERNANCE', weight: 'long', source: 'When Governance Lives in Memory… and When It Becomes Muscle', year: 2026 },
  { text: 'No se puede empezar la casa por el tejado.', thread: 'GOVERNANCE', weight: 'short', source: 'From Stewardship to Partnership: Why GenAI in Data Governance Is No Longer “The Future”', year: 2026, lang: 'es' },
  { text: 'Human override exists only on paper.', thread: 'GOVERNANCE', weight: 'short', source: 'Responsible AI in Times of Chaos: Why Trust Is Not a Feature', year: 2026 },
  { text: 'AI is a hammer.', thread: 'GOVERNANCE', weight: 'short', source: 'The Data Is My Shepherd, I Shall Not Want', year: 2026 },
  { text: 'I do not trust evangelists.', thread: 'TRUST', weight: 'short', source: 'The Data Is My Shepherd, I Shall Not Want', year: 2026 },
  { text: 'AI does not hesitate. It does not say, "That depends." It simply responds.', thread: 'TRUST', weight: 'long', source: "ATLAN'S Great Data Debate: DATA, Dashboards, AI, and the Fragility of Meaning", year: 2026 },
  { text: 'Agents do not own risk. They do not carry accountability. Humans do… always.', thread: 'TRUST', weight: 'long', source: 'From Stewardship to Partnership: Why GenAI in Data Governance Is No Longer “The Future”', year: 2026 },
  { text: "In times of chaos, the absence of friction is not efficiency. It's a warning sign.", thread: 'TRUST', weight: 'long', source: 'Responsible AI in Times of Chaos: Why Trust Is Not a Feature', year: 2026 },
  { text: 'Speed is mistaken for correctness.', thread: 'TRUST', weight: 'short', source: 'Responsible AI in Times of Chaos: Why Trust Is Not a Feature', year: 2026 },
  { text: 'There is nothing more human than that.', thread: 'TRUST', weight: 'short', source: 'From Stewardship to Partnership: Why GenAI in Data Governance Is No Longer “The Future”', year: 2026 },
  { text: "It didn't replace the rep. It amplified their judgment.", thread: 'TRUST', weight: 'short', source: "Why the Smarter AI Isn't the One That Predicts", year: 2025 },
  { text: 'Nothing here is for sale, including the optimism.', thread: 'TRUST', weight: 'short', source: null },
  { text: 'Come down from the tower. The coffee is better down here.', thread: 'PROXIMITY', weight: 'long', source: 'The Data Is My Shepherd, I Shall Not Want', year: 2026 },
  { text: 'Data is love.', thread: 'PROXIMITY', weight: 'short', source: 'The Data Is My Shepherd, I Shall Not Want', year: 2026 },
  { text: 'They didn’t want promises. They wanted presence.', thread: 'PROXIMITY', weight: 'short', source: '“TODO EL MUNDO ES UN PAÍS” Everyone is a country… Inspired by Goya’s silent truths', year: 2025 },
  { text: 'Everyone is a country.', thread: 'PROXIMITY', weight: 'short', source: '“TODO EL MUNDO ES UN PAÍS” Everyone is a country… Inspired by Goya’s silent truths', year: 2025 },
  { text: "Don't stop learning.", thread: 'PROXIMITY', weight: 'short', source: '"Can I Call You Uncle Too?" On unexpected mentors, timeless advice, and the art of never stopping learning', year: 2025 },
  { text: "Sometimes it's a sentence. Sometimes it's silence.", thread: 'PROXIMITY', weight: 'short', source: '"Can I Call You Uncle Too?" On unexpected mentors, timeless advice, and the art of never stopping learning', year: 2025 },
  { text: 'But I switched them. The wrong envelopes went to the wrong places.', thread: 'PROXIMITY', weight: 'long', source: 'Crisis Management 101: The Morning Everything Went Wrong (and I Survived)', year: 2025 },
  { text: "Not every Monday starts right.", thread: 'PROXIMITY', weight: 'short', source: 'Crisis Management 101: The Morning Everything Went Wrong (and I Survived)', year: 2025 },
  { text: 'Roughly two thousand of them are relevant.', thread: 'MEMORY', weight: 'short', source: 'Ten Thousand Files, Two Thousand That Mattered', year: 2026 },
  { text: 'It is like guarding the vault while the library burns down.', thread: 'MEMORY', weight: 'long', source: 'Ten Thousand Files, Two Thousand That Mattered', year: 2026 },
  { text: 'Data is perishable.', thread: 'MEMORY', weight: 'short', source: 'Ten Thousand Files, Two Thousand That Mattered', year: 2026 },
  { text: 'Nobody was going to read that folder.', thread: 'MEMORY', weight: 'short', source: 'Ten Thousand Files, Two Thousand That Mattered', year: 2026 },
  { text: "Raw data doesn't scream; it whispers.", thread: 'MEMORY', weight: 'short', source: 'Strada Maestra: Lessons from an Italian Curve', year: 2025 },
  { text: 'You do not reach 1,000 without doing 1.', thread: 'CURIOSITY', weight: 'short', source: 'Starting the AI Journey: From First Wave to Business-Ready AI', year: 2026 },
  { text: 'Most people never start because they wait to feel "ready."', thread: 'CURIOSITY', weight: 'long', source: 'Starting the AI Journey: From First Wave to Business-Ready AI', year: 2026 },
  { text: 'Knowing the ingredients is not the same as understanding the process.', thread: 'CURIOSITY', weight: 'long', source: '“Knowing the Ingredients Isn’t Enough” – The Scientific Method According to a Hibiscus Margarita', year: 2025 },
  { text: 'Three ingredients. How hard could it be?', thread: 'CURIOSITY', weight: 'short', source: '“Knowing the Ingredients Isn’t Enough” – The Scientific Method According to a Hibiscus Margarita', year: 2025 },
  { text: 'Spoiler: it was a disaster.', thread: 'CURIOSITY', weight: 'short', source: '“Knowing the Ingredients Isn’t Enough” – The Scientific Method According to a Hibiscus Margarita', year: 2025 },
  { text: 'Lime is the green one.', thread: 'CURIOSITY', weight: 'short', source: '“Knowing the Ingredients Isn’t Enough” – The Scientific Method According to a Hibiscus Margarita', year: 2025 },
  { text: 'Honk before the curve.', thread: 'CURIOSITY', weight: 'short', source: 'Strada Maestra: Lessons from an Italian Curve', year: 2025 },
  { text: 'And yes, there was a goat.', thread: 'CURIOSITY', weight: 'short', source: 'Strada Maestra: Lessons from an Italian Curve', year: 2025 },
  { text: 'Claude: Therapy-energy, brings herbal tea and listening skills.', thread: 'CURIOSITY', weight: 'long', source: 'Speed Dating with AI: Grok', year: 2025 },
  { text: 'Bring holy water and a firewall.', thread: 'CURIOSITY', weight: 'short', source: 'Speed-Dating with AI: The GitHub Copilot', year: 2025 },
  { text: "You know you won't find \"the one\" if you don't shop around.", thread: 'CURIOSITY', weight: 'long', source: 'Speed Dating with AI: Shopping Around', year: 2025 },
  { text: 'Also, ducks. Always ducks.', thread: 'CURIOSITY', weight: 'short', source: 'Speed Dating with AI: ChatGPT', year: 2025 },
];
