const cardsData = require('../src/data');
const Card = require('../src/card')

class Deck {
  constructor(cardsData) {
    this.data = cardsData.prototypeData;
    this.cards = [];
  }

  createCards() {
    this.data.forEach((card) => {
      return this.cards.push(new Card(card))
    });
  }


  cardCount() {
    return this.data.length
  }

}

module.exports = Deck;
