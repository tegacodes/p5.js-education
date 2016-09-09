// Import the expect library.  This is what allows us to check our code. 
// You can check out the full documentation at http://chaijs.com/api/bdd/
var expect = require('chai').expect;

// Create the variable you are going to test
var p5js = 42;

// describe lets you comment on what this block of code is for.
describe('these are my first tests for p5js', function() {

  // it() lets you comment on what an individual test is about.
  it('should be a string', function(done) {
    // expect is the actual test.  This test checks if the var is a string.
    expect(p5js).to.be.a('string');
    // done tells the program the test is complete.
    done();
  });

  it('should be a awesome', function(done) {
    // This expect tests the value of the string.
    expect(p5js).to.equal('awesome');
    done();
  });
});