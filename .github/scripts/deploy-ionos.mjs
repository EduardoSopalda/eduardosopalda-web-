// Uploads dist/ to the IONOS webspace over pure SFTP protocol.
//
// wlixcc/SFTP-Deploy-Action (tried first) issues a raw SSH shell command
// ("mkdir -p ...") before uploading, and this IONOS account's shell is
// locked to the sftp subsystem only (rssh) -- any plain SSH exec, even
// just mkdir, is refused outright, regardless of remote_path. ssh2-sftp-client
// never does that: its mkdir and uploadDir both speak the SFTP protocol's
// own directory-creation operation, not a shell command, so it works
// under the same restriction that broke the other action.
import Client from 'ssh2-sftp-client';

const { IONOS_SFTP_PASSWORD } = process.env;
if (!IONOS_SFTP_PASSWORD) {
  console.error('IONOS_SFTP_PASSWORD is not set.');
  process.exit(1);
}

const sftp = new Client();

try {
  await sftp.connect({
    host: 'access-5017995636.webspace-host.com',
    port: 22,
    username: 'a604739',
    password: IONOS_SFTP_PASSWORD,
  });

  await sftp.uploadDir('dist', '/eduardoweb');

  console.log('Upload complete.');
} catch (err) {
  console.error('Deploy failed:', err);
  process.exitCode = 1;
} finally {
  await sftp.end();
}
