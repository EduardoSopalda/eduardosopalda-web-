// Shared stop data -- previously duplicated three ways: Field.astro's
// own STOPS array (label + href, driving the seven anchors that ride
// the nerve), the no-JS <nav> landmark in Field.astro's own markup
// (label + href again, by hand, with a comment asking future edits to
// "keep it in sync... by hand"), and each empty room page's hardcoded
// EmptyStop subtitle prop (the same descriptive line a third time).
// EmptyStop.astro's own comment already claimed "the same line
// Field.astro already shows for this stop on the nerve, reused, not
// new copy" -- which wasn't true of the code, since Field.astro never
// rendered that line anywhere. Extracted here, the same fix
// fragments.ts's own header comment already describes for a different
// fifty lines, so all three call sites read from one place and that
// comment can finally be accurate.
export type Stop = {
  label: string;
  subtitle: string;
  href: string;
};

export const STOPS: Stop[] = [
  { label: 'Context', subtitle: 'the argument, stated once', href: '/context' },
  { label: 'Writing', subtitle: 'twenty five signals', href: '/writing' },
  { label: 'Lexicon', subtitle: 'contested words, defined in public', href: '/lexicon' },
  { label: 'Out Loud', subtitle: 'talks, panels, DAMA, the white paper', href: '/out-loud' },
  { label: 'Community', subtitle: 'giving time back', href: '/community' },
  { label: 'Who', subtitle: 'Panama, Finland, Barcelona, a goat', href: '/who' },
  { label: 'Contact', subtitle: 'a question, answerable', href: '/contact' },
];
