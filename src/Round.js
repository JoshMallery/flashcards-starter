const Deck = require('../src/Deck');


class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    this.turns++

    if(guess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push(this.currentCard.id)
      this.currentCard = this.deck[this.turns];
      return "incorrect";
      } else {
      this.currentCard = this.deck[this.turns];
      return "correct";
      }
  }

  calculatePercentCorrect() {
    let percent = (this.turns - this.incorrectGuesses.length) / this.turns * 100
    return percent
  }

  endRound() {
    return console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }

}



module.exports = Round;
