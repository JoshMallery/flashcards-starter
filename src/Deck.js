const Card = require('../src/card')

class Deck {
  constructor(cardsData) {
    this.cards = this.createCards(cardsData);
  }

  createCards(cardsData) {
    this.cards = [];
    cardsData.forEach((card) => {
      this.cards.push(new Card(card.id,card.question,card.answers, card.correctAnswer));
    });
    return this.cards
  }

  cardCount() {
    return this.cards.length;
  }

}

module.exports = Deck;
