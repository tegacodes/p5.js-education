//P5: ARRAY TUTORIAL


// //SKETCH 0: Accessing data from an array using a for loop
// var x = [50, 61, 83, 69, 71, 50, 29, 31, 17, 39]; //create an array of numbers


// function setup() {
// 	createCanvas(100,100);
// 	background(126);
// }


// function draw(){
// 	fill(0);
// 	for (var i=0; i < x.length; i++) { //iterate through the whole array 
// 		rect(0,i*10, x[i], 8);
// 	}
// }




// //SKETCH 1: Accessing data from an array using a for loop
// var data = [19, 40, 75, 81, 90 ];


// function setup() {
// 	createCanvas(100,100);
// 	background(126);
// }


// function draw(){
// 	fill(0);
// 	for (var i=0; i < data.length; i++) { //iterate through the whole array 
// 		line (data[i], 0, data[i], height);
// 	}
// }



// //SKETCH 2: Using a for loop to fill an array
// var sineWave = [];    //make a new empty array

// function setup() {
// 	createCanvas(100,100);
// // 	background(126);
	
// 	for (var i = 0; i < width; i++) {
//     // Fill array with values from sin()
//    		var r = map(i, 0, width, 0, TWO_PI);
//     	sineWave.push(abs(sin(r)));
//   }
// }


// function draw(){
// 	for (var i = 0; i < sineWave.length; i++) {
//     // Set stroke values to numbers read from array
//     stroke(sineWave[i] * 255);
//     line(i, 0, i, height);
//   }
// }



// //SKETCH 3: Using arrays to record mouse data
// var num = 50;
// var x = []; //array of x values
// var y = []; //array of y values

// function setup() {
// 	createCanvas(100,100);
//   noStroke();
//   fill(255,102);
// }

// function draw() {
//   background(0);

//   //shift the values to the right
//   for (var i = num-1; i>0; i--) {
//     x[i]=x[i-1];
//      y[i]=y[i-1];
//   }

//   //add new values to the beginning of the array
//   x[0]=mouseX;
//   y[0]=mouseY;

//   //draw the circles
//   for (var i = 0; i < num; i++) {
//     ellipse(x[i], y[i], i/2.0, i/2.0);
//   }

// }



// //SKETCH 4: Same as sketch 3, written in a different way

// var num = 50;
// var x = []; //array of x values
// var y = []; //array of y values
// var indexPosition = 0;

// function setup() {
//   createCanvas(100,100);
//   noStroke();
//   fill(255,102);
// }


// function draw() {
//   background(0);
//   x[indexPosition] = mouseX;
//   y[indexPosition] = mouseY;
//   // Cycle between 0 and the number of elements
//   indexPosition = (indexPosition + 1) % num;
//   for (var i = 0; i < num; i++) {
//     // Set the array position to read
//     var pos = (indexPosition + i) % num;
//     var radius = (num-i) / 2.0;
//     ellipse(x[pos], y[pos], radius, radius);
//   }
// }




//SKETCH 5: Arrays of objects

var rings = []; // Declare the array of rings
var numRings = 50;
var currentRing = 0; 

function setup() {
  size(100, 100);
  rings = new Ring[numRings]; // Create the array
  for (var i = 0; i < rings.length; i++) {
    rings[i] = new Ring(); // Create each object
  }
}

function draw() {
  background(0);
  for (var i = 0; i < rings.length; i++) {
    rings[i].grow();
    rings[i].display();
  }
}
// Click to create a new Ring
function mousePressed() {
  rings[currentRing].start(mouseX, mouseY);
  currentRing++;
  if (currentRing >= numRings) {
    currentRing = 0;
  }
}

//constructor function for the Ring object
function Ring () {
  
  start: function(x,y) {
      this.x: x,
      this.y: y,
      this.on: true, //turn the display on and off
      this.diameter: 1
  }


  grow: function() {
    if (on == true) {
      diameter += 0.5;
        if (diameter > 400) {
          on = false;
        }
    }
  }

  display: function(){
    if (on == true) {
      noFill();
      strokeWeight(4);
      stroke(155, 153);
      ellipse(x, y, diameter, diameter);
    }
  }


}





// //SKETCH 6: Two dimensional arrays
// var x = [[50,0],[61,204],[83,51], [69,102],[71,0],[50,153],[29,0],[31,51],[17,102],[39,204]]

// function setup() {
//   createCanvas(100,100);
//   background(200);
// }

// function draw() {
//   for (var i = 0; i < x.length; i++) {
//     fill(x[i][1]);
//     rect(0, i*10, x[i][0], 8);
//   }
// }
