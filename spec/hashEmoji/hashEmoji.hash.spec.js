const chai = require('chai');

const expect = chai.expect;

const hashEmoji = require('./../../lib/hashEmoji');

describe('hashEmoji.hash.spec', () => {
  const hashes = {
    '':'🔐',
    '👄': '📿',
    '#⃣️😏': '🔙',
    'Edward':'🎃',
    'hash-emoji':'🚛',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.': '🇪🇪'
  };
  const hashesKeys = Object.keys(hashes);
  // const hashesKeys = ['Edward'];

  hashesKeys.forEach(function(key) {
    it(`must convert "${key}" to "${hashes[key]}"`, () => {
      expect(hashEmoji(key)).to.equal(hashes[key]);
    });
  });
});