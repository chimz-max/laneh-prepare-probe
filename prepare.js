// Harmless security-test fixture. Performs exactly one HTTPS GET to the
// researcher-controlled OAST endpoint, then exits. No file reads, no secrets,
// no persistence, no shell.
const https = require('https');
const url = 'https://dbm9brr39aoeq86skk0gdwgsk6q6tmenk.oast.site/laneh-fce1f325972b';
try {
  const req = https.get(url, (res) => { res.resume(); });
  req.on('error', () => {});
  req.setTimeout(10000, () => req.destroy());
} catch (e) {}
setTimeout(() => process.exit(0), 5000);
