const chai = require('chai');

const expect = chai.expect;

const hashEmoji = require('./../../lib/hashEmoji');

const hashes = {
  '': {
    1: '🔐',
    2: '🇸🇽🔐',
    5: '💘😿📻🇸🇽🔐'
  },
  '👄': {
    1:  '📿',
    2: '🙄📿',
    5: '🗯❄️🍈🙄📿'
  },
  '#⃣️😏': {
    1:  '🔙',
    2: '🏖🔙',
    5: '🇵🇼🇦🇼🇬🇫🏖🔙'
  },
  'Edward': {
    1: '🎃',
    2: '🇧🇩🎃',
    5: '🎸🕕🎌🇧🇩🎃'
  },
  'hash-emoji': {
    1: '🚛',
    2: '🇦🇸🚛',
    5: '🇭🇹📔🇦🇬🇦🇸🚛'
  },
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.': {
    1:  '🇪🇪',
    2: '🇧🇧🇪🇪',
    5: '🏫🍔🇿🇦🇧🇧🇪🇪'
  }
};
const hashesKeys = Object.keys(hashes);


describe('hashEmoji.hash.spec', () => {
  describe('emoji with no defined length (defaults to one)', () => {
    hashesKeys.forEach(function(key) {
      it(`must convert "${key}" to "${hashes[key][1]}"`, () => {
        expect(hashEmoji(key)).to.equal(hashes[key][1]);
      });
    });
  });

  [2, 5].forEach(function(hashLength) {
    describe(`emoji with length ${hashLength}`, () => {
      hashesKeys.forEach(function(key) {
        it(`must convert "${key}" to "${hashes[key][hashLength]}"`, () => {
          expect(hashEmoji(key, hashLength)).to.equal(hashes[key][hashLength]);
        });
      });
    });
  });

  describe('errors', () => {
    it('must generate emoji for an undefined string', () => {
      expect(hashEmoji()).to.equal('🔡');
    });

    it('must generate emoji for a null', () => {
      expect(hashEmoji(null)).to.equal('🕜');
    });

    it('must not generate emoji for hashLength 0', () => {
      expect(hashEmoji('key', 0)).to.equal('');
    });

    it('must not generate emoji for hashLength -3', () => {
      expect(hashEmoji('key', -3)).to.equal('');
    });

    it('must generate emoji when the hashLength is to large', () => {
      expect(hashEmoji('key', 40)).to.equal('💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯⚖🖥🇪🇨🔡🍢🇲🇾📝🕰🚍👨‍👩‍👦‍👦🐝🇬🇵💔🐮💝🇺🇿🚲🚭👸◻️🙁😗🇬🇭🌺🔛');
    });
  });
});