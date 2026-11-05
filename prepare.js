// Harmless security-test fixture. Performs exactly one HTTPS GET to the
// researcher-controlled OAST endpoint, then exits. No file reads, no secrets,
// no persistence, no shell.
const https = require('https');
const url = 'https:///laneh-cold-a0647b9eae';
try {
  const req = https.get(url, (res) => { res.resume(); });
  req.on('error', () => {});
  req.setTimeout(10000, () => req.destroy());
} catch (e) {}
setTimeout(() => process.exit(0), 5000);
