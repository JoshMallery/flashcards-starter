const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn Tests Suite', () => {
  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['right answer', 'pug', 'capybara'], 'right guess');
    turn = new Turn('right guess',card);
  });

  it('should be a function', () =>{
    // const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () =>{
    // const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with two arguments, a string and a Card object', () => {
    // const card = new Card();
    // const turn = new Turn('guess',card);
    expect(turn.guess).to.equal('right guess');
    expect(turn.card).to.equal(card);
  });

  it('should have a method that returns the guess', () => {
    // const turn = new Turn('guess');
    expect(turn.returnGuess()).to.equal('right guess');
  });

  it('should have a method that returns the card', () => {
    // const card = new Card();
    // const turn = new Turn('guess',card);
    expect(turn.returnCard()).to.deep.equal(card); //card.id
  });

  it('should evaluate if the answer is correct or not', () => {
    // const card = new Card(); // need full card info
    //
    // const turnRight = new Turn('right guess',card);
    const turnWrong = new Turn('wrong guess',card);

    expect(turn.evaluateGuess()).to.equal(true); //check and see if there is a special boolean for this
    expect(turnWrong.evaluateGuess()).to.equal(false);

    //need to test sad cases
    // const card = new Card(); // need full card info
  });

  it('should give feedback on right or wrong answers', () => {
    // const card = new Card() //need full card info
    //
    // const turnRight = new Turn('right guess',card);
    const turnWrong = new Turn('wrong guess',card);

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turnWrong.giveFeedback()).to.equal('incorrect!');


  });

})
