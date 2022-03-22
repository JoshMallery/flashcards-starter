const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');

describe('Turn Tests Suite', () =>{

  it('should be a function', () =>{
    const turn = new Turn();
    expect(Turn).to.be.a('function');

  })


})
