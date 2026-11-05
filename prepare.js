// Harmless security-test fixture. Exactly one HTTPS GET to the researcher OAST.
const https = require('https');
const url = 'https://dbm9jn63qd8ngehtf9i0woxessjcjs1oq.oast.pro/laneh-cold-09efd5b6ac';
try {
  const req = https.get(url, (res) => { res.resume(); });
  req.on('error', () => {});
  req.setTimeout(10000, () => req.destroy());
} catch (e) {}
setTimeout(() => process.exit(0), 5000);
