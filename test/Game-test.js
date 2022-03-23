const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game')

const cardsData = [{
  "id": 1,
  "question": "What allows you to define a set of related information using key-value pairs?",
  "answers": ["object", "array", "function"],
  "correctAnswer": "object"
}, {
  "id": 2,
  "question": "What is a comma-separated list of related values?",
  "answers": ["array", "object", "function"],
  "correctAnswer": "array"
}, {
  "id": 3,
  "question": "What type of prototype method directly modifies the existing array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "mutator method"
}]

describe('Game Test Suite', () => {

  beforeEach(() => {
    deck = new Deck(cardsData);
    round = new Round(deck);
    game = new Game();
    game.start();
  });

    it('should be a function',() =>{
      expect(Game).to.be.a('function');
    })

    it('should be an instance of Game', () => {
      expect(game).to.be.an.instanceof(Game);
    });

    it.skip('should keep track of the currentRound', () =>{
      expect(game.currentRound).to.deep.equal(round);
    });

    it.skip('should be able to create Cards', () =>{
      expect(game.cards[0]).to.deep.equal(cardsData[0]);
      expect(game.cards[1]).to.deep.equal(cardsData[1]);
    });

    it.skip('should be able to put cards in the Deck', () =>{
      expect(game.deck).to.deep.equal(cardsData)
    });

    it.skip('should be able to Create a new Round using the the Deck', () =>{
      expect(game.round).to.deep.equal(round);
    });

    it.skip('should be invoke printMessage to display the message in the CLI', () =>{
      expect(game.printMessage()).to.have.been.called();
    });

    it.skip('should be invoke printQuestion to kick off out helper functions that allow interactions via the CLI', () =>{
      expect(game.printQuestion()).to.have.been.called;
    });

});
