// This is for a unit test tutorial.
// it should create a rectangle and allow you to iterate over
// every single color.
//
// colorValueIncrease sets the amount the color changes on each
// draw loop. Values greater than 255 will break the sketch.
// fillColor will be the color of the rectangle.
// colorIncreaser will become an instance of our ColorIncreaser class.


var colorValueIncrease = 1;
var fillColor
var colorIncreaser


function setup() {
  createCanvas(500, 500);
  background(0);
  fillColor = color(0, 0, 0, 255);
  noStroke();
  colorIncreaser = new ColorIncreaser(colorValueIncrease, fillColor);

}


function draw() {
 fill(colorIncreaser.fillColor);
 rect(0, 0, 500, 500);
 colorIncreaser.increaseFillColor()
}




function ColorIncreaser(colorValueIncrease, fillColor) {
  // Stores a value and a color and allows you to increase the color
  // by that value.
  this.colorValueIncrease = colorValueIncrease
  this.fillColor = fillColor;
}


ColorIncreaser.prototype.increaseFillColor = function() {
  // increase the first color channel by one.  If that channel
  // is now > 255 then increment the next color channel.  Repeat for second
  // and third channel


  this.fillColor.levels[0] += this.colorValueIncrease
  this.numColorsSoFar += 1


  if (this.fillColor.levels[0] > 255) {
    this.fillColor.levels[0] = 0
    this.fillColor.levels[1] += this.colorValueIncrease
  }
  if (this.fillColor.levels[1] > 255) {
    this.fillColor.levels[1] = 0
    this.fillColor.levels[2] += this.colorValueIncrease
  }
  if (this.fillColor.levels[2] > 255) {
    this.fillColor.levels[2] = 0;
  }
}


module.exports.ColorIncreaser = ColorIncreaser;
