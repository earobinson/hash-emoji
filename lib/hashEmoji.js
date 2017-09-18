const crypto = require('crypto');

const emojis =require('./emojis');

module.exports = (string, hashLength = 1) => {
  const hash = crypto.createHash('sha256');
  hash.update(string);

  const hexHash = hash.digest('hex');
  const decimalHash = parseInt(hexHash, 16);
  let emojiIndex = decimalHash % Math.pow(emojis.length, hashLength);

  let emojiString = '';
  for (let ii = 0; ii < hashLength; ii++) {
    emojiString = `${emojis[emojiIndex % emojis.length]}${emojiString}`;
    emojiIndex = Math.floor(emojiIndex / emojis.length);
  }
  return emojiString;
};