var addOne = require('../src/app.js').addOne;
var expect = require('chai').expect;

describe('testing the addOne function', function(){

  it('should add 1 to the argument', function(){
    // here is where our test code should go

    var number = 42;
    var result = addOne(number);

    expect(result).to.equal(43);
  });


  //it(...);

  // describe(...)



});
