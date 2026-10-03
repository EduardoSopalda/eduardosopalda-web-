// The address lives here, not on the page. FormSubmit delivers the
// question to the mailbox. The first delivery asks that inbox to confirm.
export const prerender = false;

const TO = 'me@eduardosopalda.com';

export async function POST({ request }: { request: Request }) {
  let body: { message?: string; name?: string; email?: string; honey?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  if (body.honey) return Response.json({ ok: true });

  const message = (body.message ?? '').trim();
  const email = (body.email ?? '').trim();
  const name = (body.name ?? '').trim() || 'Unsigned';
  if (!message || message.length > 4000 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const sent = await fetch(`https://formsubmit.co/ajax/${TO}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      message,
      name,
      email,
      _subject: 'A question from the site',
      _captcha: 'false',
      _template: 'box',
    }),
  });

  if (!sent.ok) return Response.json({ ok: false }, { status: 502 });
  const data = await sent.json().catch(() => ({}));
  if (String(data.success) === 'false') return Response.json({ ok: false }, { status: 502 });
  return Response.json({ ok: true });
}
