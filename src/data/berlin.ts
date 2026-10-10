// The talk is on Monday 26 October 2026 in Berlin. The note opens at
// 10:00 Berlin time (CET, +01:00) that same morning. The noindex on the
// Berlin page lifts at the same moment, because it also reads berlinOpen().
// The desk key is only for the organization. It is not linked from the site.
export const BERLIN_OPENS = Date.parse('2026-10-26T10:00:00+01:00');
export const BERLIN_DESK = 'estrel-desk-9c2';

export function berlinOpen(now = Date.now()) {
  return now >= BERLIN_OPENS;
}
