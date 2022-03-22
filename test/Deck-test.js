const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const thatData = require('../src/data');

describe('Deck', () => {

  beforeEach(()=> {
    deck = new Deck(thatData);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it.skip('should have an array of Cards', () => {
    expect(deck.cards).to.be.an.instanceof(Array);
    expect(deck.cards[1]).to.be.an.instanceof(Card);
    expect(deck.cards[2]).to.be.an.instanceof(Card);
  });

  it.skip('should know how many cards are in the Deck', () => {
    expect(deck.cardCount()).to.be.a('function');
    expect(deck.cardCount()).to.equal(deck.cards.length);
  });

  it('data import test', () => {
    expect(deck.data[0].id).to.equal(1);
  });

});
