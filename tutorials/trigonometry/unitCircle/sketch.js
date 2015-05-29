var angle = 360.0;
var x1 =200;
var y1 =350;
var d = 300;

var x2 =350;
var y2 =200;

var cx=200;
var cy=200;


function setup() {
  createCanvas(600, 400);
  smooth();
  noFill();
}

function draw() {
  background(255);
  rect(0, 0, width-1, height-1);
  //axis
  stroke(0);
  line(cx,50,cy,350);
  line(50,cx,350,cy);
  //big circle
  ellipse(cx,cy,d,d);
  //line 1
  stroke(237,34,93);
  fill(237,34,93);
  ellipse(cx,cy,5,5);
  ellipse(x1,y1,5,5);
  noFill();

  line(cx,cy,x1,y1);


  //calculate x1
  x1=d/2*cos(radians(angle))+cx;
  //calculate y1
  y1=d/2*sin(radians(angle))+cy;
  stroke(0);
  //line 2
  ellipse(cx,cy,d,d);
  fill(0);
  stroke(200);
  line(x1,y1,x1,cy);

  //curve
  noFill();
  //calculate x1
    x2=d/2*cos(radians(angle))+20;
    //calculate y1
    y2=d/2*sin(radians(angle))+20;
    stroke(200);
    if(angle>180&&angle<270){
      arc(cx, cy, 60, 60, PI*3, radians(angle));
      stroke(237,34,93);
      strokeWeight(3);
      arc(cx, cy,300, 300,  PI*3, radians(angle));
      strokeWeight(1);
    }
    if(angle>270&&angle<360){
      arc(cx, cy, 60, 60, radians(angle), 0);
      stroke(237,34,93);
      strokeWeight(3);
      arc(cx, cy,300, 300,  radians(angle), 0);
      strokeWeight(1);
    }
    if(angle>0&&angle<90){
      arc(cx, cy, 60, 60, 0,radians(angle));
      stroke(237,34,93);
      strokeWeight(3);
      arc(cx, cy,300, 300,  0,radians(angle));
      strokeWeight(1);
    }
    if(angle>90&&angle<180){
      arc(cx, cy, 60, 60, radians(angle), PI);
      stroke(237,34,93);
      strokeWeight(3);
      arc(cx, cy,300, 300,  radians(angle), PI);
      strokeWeight(1);
    }
  stroke(0);
  //labels
  text("90",cx-5,20);
  text("\u03C0"+" / 2",cx-10,40);
  text("0",cx+d/2+20,cy+5);
  text("0",cx+d/2+5,cy+5);
  text("270",cx-10,cy+d/2+40);
  text("3 / 2 "+"\u03C0",cx-15,cy+d/2+20);
  text("180",10,cy+5);
  text("\u03C0",35,cy+5);

  //key
  text("angle = "+round(angle) + " degrees",450,50);
  text("angle = "+round(radians(angle)) + " radians",450,100);


  angle=angle-0.7;
  if(angle<0){

    angle=360.0;
  }

}
