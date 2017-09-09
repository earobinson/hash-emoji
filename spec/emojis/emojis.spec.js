const chai = require('chai');

const expect = chai.expect;

const emojis = require('./../../lib/emojis');

describe('emojis.spec', () => {
  it('must have 1020 emojis', () => {
    expect(emojis.length).to.equal(1295);
  });

  it('all the emojis must be unique', () => {
    const uniqueEmojis = emojis.filter(function(element, position) {
      return emojis.indexOf(element) == position;
    });

    // expect(uniqueEmojis.length).to.equal(emojis.length);
    expect(uniqueEmojis).to.deep.equal(emojis);
  });
});