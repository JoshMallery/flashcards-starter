const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Round Test Suite', () => {

  beforeEach(()=>{
    deck = new Deck(prototypeQuestions);
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
    expect(round.deck).to.deep.equal(prototypeQuestions);
  });

  it('should have the first card in the Deck as the current Card', () =>{
    round = new Round(deck);

    expect(round.currentCard).to.deep.equal(prototypeQuestions[0]);
  });

  it('should return the current Card', () =>{
    expect(round.returnCurrentCard()).to.deep.equal(prototypeQuestions[2]);
  });

  it('should have a takeTurn method that updates turns Count', () =>{
    expect(round.turns).to.equal(2);
  })

  it('should have a way to update the next card to become the current card', () =>{
    expect(round.currentCard).to.deep.equal(prototypeQuestions[2]);
  });

  it('should keep track of incorrect guesses ID', () =>{
    expect(round.incorrectGuesses).to.deep.equal([prototypeQuestions[1].id]);
  });

  it('should return incorrect for incorrect guesses', () => {
    expect(round.takeTurn("wrong")).to.equal('incorrect');
  });

  it('should return correct for correct guesses', () => {
    expect(round.takeTurn("mutator method")).to.equal('correct');
  });

  it('should calculate the percentage of correct guesses and return', ()=>{
    round.takeTurn("wrong");

    expect(round.calculatePercentCorrect()).to.equal((1/3)*100);
  });

  it('print to the console at the end of the round', () =>{
    expect(round.endRound()).to.equal(console.log('** Round over! ** You answered 50% of the questions correctly!'));
    });



});
