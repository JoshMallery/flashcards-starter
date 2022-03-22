class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    switch (this.guess === this.card.correctAnswer) {
      case true:
        return true
      case false:
        return false;
    }
  }

  giveFeedback() {
    switch (this.evaluateGuess()) {
      case true:
        return 'correct!';
      case false:
        return 'incorrect!';
    }
  }

}

module.exports = Turn;
