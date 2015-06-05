var angle = 360.0;
var x1 =200;
var y1 =350;
var d = 300;

var x2 =350;
var y2 =200;

var cx=400;
var cy=200;

var tx = 20;

var ty = 50;

var angleSlider;


function setup() {
  createCanvas(600, 400);
  smooth();
  noFill();
  angleSlider=createSlider(0,360,[60]);
  angleSlider.position(tx-5, 70);
  textFont("Georgia");
  smooth();
}

function draw() {
  background(255);
// stroke(200);
//   rect(0, 0, width-1, height-1);

  angle=(360-angleSlider.value());
  //axis
  stroke(0);
  line(cx,cy-d/2,cx,cy+d/2);
  line(cx-d/2,cy,cx+d/2,cy);
  //big circle
  ellipse(cx,cy,d,d);
  fill(0);
  //stroke(200);
  stroke(237,34,93);
  fill(237,34,93);
  line(x1,y1,x1,cy); //opposite


  line(x1,cy,cx,cy);


  //line 1

  ellipse(cx,cy,5,5);
  ellipse(x1,y1,5,5);
  noFill();

  line(cx,cy,x1,y1);
  console.log("angle="+angle);
  if(angle==90||angle==0||angle==180||angle==270){

  }else{
  text("r",(x1+cx)/2+5,(cy+y1)/2+7);
  text("x",(x1+cx)/2,cy-5);
  text("y",x1-10,(y1+cy)/2);
}

  //calculate x1
  x1=d/2*cos(radians(angle))+cx;
  //calculate y1
  y1=d/2*sin(radians(angle))+cy;
  stroke(0);
  //line 2
  ellipse(cx,cy,d,d);


  //curve
  noFill();
  //calculate x1
    x2=d/2*cos(radians(angle))+20;
    //calculate y1
    y2=d/2*sin(radians(angle))+20;
    stroke(200);

   arc(cx, cy, 60, 60, radians(angle),0);
  // if(angle>180&&angle<270){
  //      arc(cx, cy, 60, 60, PI*3, radians(angle));
  //      stroke(237,34,93);
  //      strokeWeight(3);
  //      //arc(cx, cy,300, 300,  PI*3, radians(angle));
  //      strokeWeight(1);
  //    }
  //    if(angle>270&&angle<360){
  //      arc(cx, cy, 60, 60, radians(angle), 0);
  //      stroke(237,34,93);
  //      strokeWeight(3);
  //     // arc(cx, cy,300, 300,  radians(angle), 0);
  //      strokeWeight(1);
  //    }
  //    if(angle>0&&angle<90){
  //      arc(cx, cy, 60, 60, 0,radians(angle));
  //      stroke(237,34,93);
  //      strokeWeight(3);
  //     // arc(cx, cy,300, 300,  0,radians(angle));
  //      strokeWeight(1);
  //    }
  //    if(angle>90&&angle<180){
  //      arc(cx, cy, 60, 60, radians(angle), PI);
  //      stroke(237,34,93);
  //      strokeWeight(3);
  //     // arc(cx, cy,300, 300,  radians(angle), PI);
  //      strokeWeight(1);
  //    }
  stroke(0);
  //labels
  text("90",cx-5,20);
  text("\u03C0"+" / 2",cx-10,40);
  text("0",cx+d/2+20,cy+5);
  text("0",cx+d/2+5,cy+5);
  text("270",cx-10,cy+d/2+40);
  text("3 / 2 "+"\u03C0",cx-15,cy+d/2+20);
  text("180",cx-d/2-50,cy+5);
  text("\u03C0",cx-d/2-20,cy+5);
  stroke(237,34,93);
  fill(237,34,93);
  textSize(14);
  //key
  text("Change the angle:",tx,ty);
  text("angle = "+round(360-angle) + " degrees",tx,ty+60);
  text("angle = "+(radians(360-angle)/PI).toFixed(2) + " \u03C0 radians",tx,ty+80);

  stroke(0);
  fill(0);
  textSize(12);
  //text("SOH-CAH-TOA",tx,ty+160);

  text("r = 1",tx,ty+160);

  text("cos(angle) = x/r",tx,ty+200);
  text("cos("+(radians(360-angle)/PI).toFixed(2) +" \u03C0) = x/1",tx,ty+220);
  text(cos(radians(angle)).toFixed(2)+" = x",tx,ty+240);

  text("sin(angle) = y/r",tx,ty+280);
  text("sin("+(radians(360-angle)/PI).toFixed(2) +" \u03C0) = y/1",tx,ty+300);
  text(-1*sin(radians(angle)).toFixed(2)+" = y",tx,ty+320);




  // if(angle<0){
  //
  //   angle=360.0;
  // }

}
