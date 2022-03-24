const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game Test Suite', () => {

  beforeEach(() => {
    deck = new Deck(prototypeQuestions);
    round = new Round(deck);
    game = new Game(prototypeQuestions);
    game.start(1);
  });

    it('should be a function',() =>{
      expect(Game).to.be.a('function');
    })

    it('should be an instance of Game', () => {
      expect(game).to.be.an.instanceof(Game);
    });

    it('should keep track of the currentRound', () =>{
      expect(game.currentRound).to.deep.equal(round);
    });

    it('should be able to create Cards', () =>{
      expect(game.deck.cards[0]).to.deep.equal(prototypeQuestions[0]);
      expect(game.deck.cards[1]).to.deep.equal(prototypeQuestions[1]);
    });

    it('should be able to put cards in the Deck', () =>{
      expect(game.deck.cards).to.deep.equal(prototypeQuestions);
    });

    it('should be able to Create a new Round using the the Deck', () =>{
      expect(game.round).to.deep.equal(round);
    });

});
