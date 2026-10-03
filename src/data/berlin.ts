// The talk stays closed through 26 October 2026, Berlin time.
// It opens at midnight as the 27th begins.
// The desk key is only for the organization. It is not linked from the site.
export const BERLIN_OPENS = Date.parse('2026-10-27T00:00:00+01:00');
export const BERLIN_DESK = 'estrel-desk-9c2';

export function berlinOpen(now = Date.now()) {
  return now >= BERLIN_OPENS;
}
