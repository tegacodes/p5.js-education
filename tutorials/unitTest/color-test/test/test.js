// Import the expect library.  This is what allows us to check our code.
// You can check out the full documentation at http://chaijs.com/api/bdd/
var expect = require('chai').expect;
// Import our colorIncreaser class.
var ColorIncreaser = require('../sketch').ColorIncreaser;
function mockColor(red, green, blue, alpha) {
    // Mock of the color class from p5
    this.levels = [];
    this.levels[0] = red;
    this.levels[1] = green;
    this.levels[2] = blue;
    this.levels[3] = alpha;
}

describe('ColorIncreaser tests', function() {



  // beforeEach is a special function that is similar to the setup function in
  // p5.js.  The major difference it that this function runs before each it()
  // test you create instead of running just once before the draw loop
  // beforeEach lets you setup the objects you want to test in an easy fashion.
  beforeEach(function() {
       var colorValueIncrease = 1;
       var fillColor = new mockColor(0, 0, 0, 255);
       colorIncreaser = new ColorIncreaser(colorValueIncrease, fillColor);
   });


   it('should store initial values without mutation', function(done) {
    expect(colorIncreaser.colorValueIncrease).to.be.equal(1);
    expect(colorIncreaser.fillColor.levels[0]).to.equal(0)
    expect(colorIncreaser.fillColor.levels[1]).to.equal(0)
    expect(colorIncreaser.fillColor.levels[2]).to.equal(0)
    expect(colorIncreaser.fillColor.levels[3]).to.equal(255)
    done();
  });



  it('should be an object', function(done) {
    expect(colorIncreaser).to.be.a('object');
    done();
  });

  it('should have rgb values 255, 0, 0 after calling increaseFillColor 255 times', function(done) {
     //it is 256^1 - 1 because it starts with the color black
     for (var count = 0; count < 255; count += 1) {
         colorIncreaser.increaseFillColor()
     }
     expect(colorIncreaser.fillColor.levels[0]).to.equal(255)
     expect(colorIncreaser.fillColor.levels[1]).to.equal(0)
     expect(colorIncreaser.fillColor.levels[2]).to.equal(0)
     done();
   });
   it('should have rgb values 255, 255, 0 after calling increaseFillColor 65535 times', function(done) {
      //it is 256^2 - 1 because it starts with the color black
      for (var count = 0; count < 65535; count += 1) {
          colorIncreaser.increaseFillColor()
      }
      expect(colorIncreaser.fillColor.levels[0]).to.equal(255)
      expect(colorIncreaser.fillColor.levels[1]).to.equal(255)
      expect(colorIncreaser.fillColor.levels[2]).to.equal(0)
      done();
    });


    it('should have rgb values 255, 255, 255 after calling increaseFillColor 16777215 times', function(done) {
      //it is 256^2 - 1 because it starts with the color black
      for (var count = 0; count < 16777215; count += 1) {
          colorIncreaser.increaseFillColor()
      }
      expect(colorIncreaser.fillColor.levels[0]).to.equal(255)
      expect(colorIncreaser.fillColor.levels[1]).to.equal(255)
      expect(colorIncreaser.fillColor.levels[2]).to.equal(255)
      done();
    });
});
