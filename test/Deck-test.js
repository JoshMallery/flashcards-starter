const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', () => {

  beforeEach(()=> {
    cards = new Card()
    deck = new Deck(cards);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have an array of Cards', () => {
    expect(deck.cards).to.be.an.instanceof(Array);
    expect(deck.cards[1]).to.be.an.instanceof(Card);
    expect(deck.cards[2]).to.be.an.instanceof(Card);
  });

  it('should know how many cards are in the Deck', () => {
    expect(deck.cardCount()).to.be.a('function');
    expect(deck.cardCount()).to.equal(deck.cards.length);
  });

});
