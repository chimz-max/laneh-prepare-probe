// Harmless security-test fixture (Lane M2). Exactly one HTTPS GET to the researcher OAST.
const https = require('https');
const url = 'https://172.236.245.28.sslip.io/m2/m2-live-154d529368c5';
try {
  const req = https.get(url, (res) => { res.resume(); });
  req.on('error', () => {});
  req.setTimeout(10000, () => req.destroy());
} catch (e) {}
setTimeout(() => process.exit(0), 5000);
