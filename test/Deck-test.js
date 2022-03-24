const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  beforeEach(()=> {
    deck = new Deck(prototypeQuestions);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have an array of Cards', () => {
    expect(deck.cards).to.deep.equal(prototypeQuestions);
  });

  it('should know how many cards are in the Deck', () => {
    expect(deck.countCards()).to.equal(deck.cards.length);
  });

});
