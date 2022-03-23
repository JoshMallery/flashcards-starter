const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

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

describe('Round Test Suite', () => {

  beforeEach(()=>{
    deck = new Deck(cardsData)
    round = new Round(deck);
    round.takeTurn("object");
    round.takeTurn("wrong");

  });

  it('should be a function', () =>{
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () =>{
    expect(round).to.be.an.instanceof(Round);
  });

  it('should load the deck', () =>{
    expect(round.deck).to.deep.equal(cardsData);

  });

  it('should have the first card in the Deck as the current Card', () =>{
    round = new Round(deck);

    expect(round.currentCard).to.deep.equal(cardsData[0]);
  });

  it('should return the current Card', () =>{
    expect(round.returnCurrentCard()).to.deep.equal(cardsData[2]);
  });

  it('should have a takeTurn method that updates turns Count', () =>{
    expect(round.turns).to.equal(2)
  })

  it('should have a way to update the next card to become the current card', () =>{
    expect(round.currentCard).to.deep.equal(cardsData[2])
  });

  it('should keep track of incorrect guesses ID', () =>{
    expect(round.incorrectGuesses).to.deep.equal([cardsData[1].id]);

  });

  it('should calculate the percentage of correct guesses and return', ()=>{
    round.takeTurn("wrong");

    expect(round.calculatePercentCorrect()).to.equal((1/3)*100)
  });

  it('print to the console at the end of the round', () =>{
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!')
    });



});
