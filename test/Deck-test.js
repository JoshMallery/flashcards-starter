const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', () => {

  beforeEach(()=> {
    deck = new Deck();
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });


});
