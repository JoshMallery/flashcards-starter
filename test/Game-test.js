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
  });

    it('should be a function',() =>{
      expect(Game).to.be.a('function');
    })

    it('should be an instance of Game', () => {
      expect(game).to.be.an.instanceof(Game);
    });

    it.skip('should keep track of the currentRound', () =>{
      expect(game.currentRound).to.deep.equal();

    });
});
