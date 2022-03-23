const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor(cardsData = prototypeQuestions) {
    this.cardsData = cardsData
  }

  start() {
    this.deck = new Deck(this.cardsData)
    this.round = new Round(this.deck)
    this.currentRound = this.round
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

}

(() => {
  let game = new Game();
  game.start();
})();

module.exports = Game;
