// The address lives here, not on the page. FormSubmit delivers the
// question to the mailbox. The first delivery asks that inbox to confirm.
export const prerender = false;

const TO = 'me@eduardosopalda.com';

// The contact page posts JSON with fetch. If JavaScript is off, the
// browser posts the plain form instead; that path answers with a
// redirect back to /contact#sent or /contact#unsent.
function reply(plain: boolean, ok: boolean, status = 200) {
  if (plain) {
    return new Response(null, {
      status: 303,
      headers: { Location: ok ? '/contact#sent' : '/contact#unsent' },
    });
  }
  return Response.json({ ok }, { status });
}

export async function POST({ request }: { request: Request }) {
  const type = request.headers.get('content-type') ?? '';
  const plain = !type.includes('application/json');
  let body: { message?: string; name?: string; email?: string; honey?: string };
  try {
    if (plain) {
      const form = await request.formData();
      const field = (key: string) => String(form.get(key) ?? '');
      body = {
        message: field('message'),
        name: field('name'),
        email: field('email'),
        honey: field('_honey'),
      };
    } else {
      body = await request.json();
    }
  } catch {
    return reply(plain, false, 400);
  }

  if (body.honey) return reply(plain, true);

  const message = (body.message ?? '').trim();
  const email = (body.email ?? '').trim();
  const name = (body.name ?? '').trim() || 'Unsigned';
  if (!message || message.length > 4000 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return reply(plain, false, 400);
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

  if (!sent.ok) return reply(plain, false, 502);
  const data = await sent.json().catch(() => ({}));
  if (String(data.success) === 'false') return reply(plain, false, 502);
  return reply(plain, true);
}
