// Film, stills, and the roadmap. Nothing is served until the talk has been given.
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { berlinOpen } from '../../../data/berlin';

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
  if (!berlinOpen()) return new Response('Not yet.', { status: 404 });
  const name = params.file ?? '';
  if (!ALLOWED.has(name)) return new Response('Not found.', { status: 404 });

  const data = await readFile(join(process.cwd(), 'private/berlin', name));
  const type = TYPE[name] ?? 'image/jpeg';
  const size = data.byteLength;
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
      },
    });
  }

  return new Response(data, {
    headers: {
      'Content-Type': type,
      'Content-Length': String(size),
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'private, max-age=3600',
    },
  });
}
