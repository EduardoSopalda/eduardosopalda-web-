// The talk stays closed through 26 October 2026, Berlin time.
// It opens at midnight as the 27th begins.
//
// This is a build-time check, not a runtime one -- the site is a static
// export with no server, so "open" is baked into the HTML at whatever
// moment it was last built. The film and stills don't ship in the build
// at all until that rebuild: see the note in automa-chem-2026.astro.
// Early access for the organizers happens outside the site (direct
// transfer), not through a desk key -- there's no server left to check
// one against.
export const BERLIN_OPENS = Date.parse('2026-10-27T00:00:00+01:00');

export function berlinOpen(now = Date.now()) {
  return now >= BERLIN_OPENS;
}
