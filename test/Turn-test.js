const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn Tests Suite', () => {

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['right answer', 'pug', 'capybara'], 'right guess');
    turn = new Turn('right guess',card);
  });

  it('should be a function', () =>{
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () =>{
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with two arguments, a string and a Card object', () => {
    expect(turn.guess).to.equal('right guess');
    expect(turn.card).to.equal(card);
  });

  it('should have a method that returns the guess', () => {
    expect(turn.returnGuess()).to.equal('right guess');
  });

  it('should have a method that returns the card', () => {
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should evaluate if the answer is correct or not', () => {
    const turnWrong = new Turn('wrong guess',card);

    expect(turn.evaluateGuess()).to.be.true;
    expect(turnWrong.evaluateGuess()).to.be.false;
  });

  it('should give feedback on right or wrong answers', () => {
    const turnWrong = new Turn('wrong guess',card);

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turnWrong.giveFeedback()).to.equal('incorrect!');
  });

})
