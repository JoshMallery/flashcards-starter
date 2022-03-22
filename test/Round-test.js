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
    round = new Round();
  });

  it('should be a function', () =>{
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () =>{
    expect(round).to.be.an.instanceof(Round);
  });

});
