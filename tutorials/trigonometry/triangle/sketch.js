//triangle
var x1 = 20;
var x2 = x1;
var y1= 300;
var y2;
var x3;
var y3= y1;
var w=200;
var h=200;



var a,b,c;
var aSlider;
var bSlider;

function setup(){
  createCanvas(400,400);
  smooth();
  stroke(0);
  aSlider=createSlider(y1-h,y1,[y1-h/2]); //y2
  aSlider.position(300, 70);
  bSlider=createSlider(x1,x1+w,[x1+w/2]); //x3
  bSlider.position(300, 50);

}

function draw(){
  background(255);
  y2=map(aSlider.value(),y1-h,y1,y1,y1-h);
  x3=(bSlider.value());
  line(x1,y1,x2,y2);
  line(x2,y2,x3,y3);
  line(x1,y1,x3,y3);
}
