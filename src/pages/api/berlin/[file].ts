// Film, stills, and the roadmap. The public site gets them only after the talk.
// The organization can download them sooner, with the desk key.
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { berlinOpen, BERLIN_DESK } from '../../../data/berlin';

export const prerender = false;

const ALLOWED = new Set([
  'film.mp4',
  'roadmap.pdf',
  '00.jpg',
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
  '06.jpg',
]);

const TYPE: Record<string, string> = {
  'film.mp4': 'video/mp4',
  'roadmap.pdf': 'application/pdf',
};

export async function GET({ params, request }: { params: { file?: string }; request: Request }) {
  const url = new URL(request.url);
  const forDesk = url.searchParams.get('desk') === BERLIN_DESK;
  if (!berlinOpen() && !forDesk) return new Response('Not yet.', { status: 404 });
  const name = params.file ?? '';
  if (!ALLOWED.has(name)) return new Response('Not found.', { status: 404 });

  const data = await readFile(join(process.cwd(), 'private/berlin', name));
  const type = TYPE[name] ?? 'image/jpeg';
  const size = data.byteLength;
  const download = url.searchParams.get('dl') === '1';
  const filename = name === 'film.mp4'
    ? 'AUTOMA-Chem-2026-Eduardo-Sopalda.mp4'
    : name === 'roadmap.pdf'
      ? 'AUTOMA-Chem-2026-Roadmap.pdf'
      : name;
  const range = request.headers.get('range');
  const match = range && /^bytes=(\d+)-(\d+)?$/.exec(range);

  if (match) {
    const start = Number(match[1]);
    const end = match[2] ? Number(match[2]) : Math.min(start + 1024 * 1024 - 1, size - 1);
    if (start >= size || end < start) {
      return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
    }
    const slice = data.subarray(start, end + 1);
    return new Response(slice, {
      status: 206,
      headers: {
        'Content-Type': type,
        'Content-Length': String(slice.byteLength),
        'Content-Range': `bytes ${start}-${end}/${size}`,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'private, max-age=3600',
        ...(download ? { 'Content-Disposition': `attachment; filename="${filename}"` } : {}),
      },
    });
  }

  return new Response(data, {
    headers: {
      'Content-Type': type,
      'Content-Length': String(size),
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'private, max-age=3600',
      ...(download ? { 'Content-Disposition': `attachment; filename="${filename}"` } : {}),
    },
  });
}
