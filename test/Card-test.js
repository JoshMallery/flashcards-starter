const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  beforeEach(() => {
    cardInfo = {
      "id": 5,
      "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "iteration method"
    }

    card = new Card(cardInfo.id,cardInfo.question,cardInfo.answers,cardInfo.correctAnswer);
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should have an id', () => {
    expect(card.id).to.equal(5)
  });

  it('should store a question', function() {
    expect(card.question).to.equal("What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?");
  });

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(["mutator method", "accessor method", "iteration method"]);
  });

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal("iteration method");
  });
});
