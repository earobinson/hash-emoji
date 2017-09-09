const crypto = require('crypto');

const emojis =require('./emojis');

module.exports = (string) => {
  const hash = crypto.createHash('sha256');
  hash.update(string);

  const hexHash = hash.digest('hex');
  const decimalHash = parseInt(hexHash, 16);
  return emojis[decimalHash % emojis.length];
};