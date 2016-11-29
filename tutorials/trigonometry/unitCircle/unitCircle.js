var sketch = function( p ) {

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


  p.setup= function() {
    var myCanvas = p.createCanvas(600, 400);
    myCanvas.parent('unitCircle');
    p.smooth();
    p.noFill();
    angleSlider=p.createSlider(0,360,[60]);
    angleSlider.position(tx-5, 70);
    p.textFont("Georgia");
    p.smooth();
  };


  function labels(){
    console.log("angle="+angle);
    if(angle==90||angle==0||angle==180||angle==270){

    }else{
      p.text("r",(x1+cx)/2+5,(cy+y1)/2+7);
      p.text("x",(x1+cx)/2,cy-5);
      p.text("y",x1-10,(y1+cy)/2);
    }

  }

  function calculations(){
    p.stroke(0);
    //labels
    p.text("90",cx-5,20);
    p.text("\u03C0"+" / 2",cx-10,40);
    p.text("0",cx+d/2+20,cy+5);
    p.text("0",cx+d/2+5,cy+5);
    p.text("270",cx-10,cy+d/2+40);
    p.text("3 / 2 "+"\u03C0",cx-15,cy+d/2+20);
    p.text("180",cx-d/2-50,cy+5);
    p.text("\u03C0",cx-d/2-20,cy+5);
    p.stroke(237,34,93);
    p.fill(237,34,93);
    p.textSize(14);

    //key
    p.text("Change the angle:",tx,ty);
    p.text("angle = "+p.round(360-angle) + " degrees",tx,ty+60);
    p.text("angle = "+(p.radians(360-angle)/p.PI).toFixed(2) + " \u03C0 radians",tx,ty+80);

    p.stroke(0);
    p.fill(0);
    p.textSize(12);
  }

  function x1y1(){
    //calculate x1
    x1=d/2*p.cos(p.radians(angle))+cx;
    //calculate y1
    y1=d/2*p.sin(p.radians(angle))+cy;

  }

  function x2y2(){
    //curve
    p.noFill();
    //calculate x1
    x2=d/2*p.cos(p.radians(angle))+20;
    //calculate y1
    y2=d/2*p.sin(p.radians(angle))+20;
    p.stroke(200);

  }
  
  function arcCalc(){

    if(angle==360){

    }else{
      if(angle==0){
        p.arc(cx, cy, 60, 60, p.radians(360),0);
      }
      p.arc(cx, cy, 60, 60, p.radians(angle),0);
    }
  }

  function trigCalcs(){

    //lables for trig calculations
    p.text("r = 1",tx,ty+160);

    p.text("cos(angle) = x/r",tx,ty+200);
    p.text("cos("+(p.radians(360-angle)/p.PI).toFixed(2) +" \u03C0) = x/1",tx,ty+220);
    p.text(p.cos(p.radians(angle)).toFixed(2)+" = x",tx,ty+240);

    p.text("sin(angle) = y/r",tx,ty+280);
    p.text("sin("+(p.radians(360-angle)/p.PI).toFixed(2) +" \u03C0) = y/1",tx,ty+300);
    p.text(-1*p.sin(p.radians(angle)).toFixed(2)+" = y",tx,ty+320);
  }

  function circle(){
    //draw circle and triangle stuff
    p.stroke(0);
    angle=(360-angleSlider.value());
    //axis
    p.stroke(0);
        p.noFill();
    p.line(cx,cy-d/2,cx,cy+d/2);
    p.line(cx-d/2,cy,cx+d/2,cy);
    //big circle
    p.ellipse(cx,cy,d,d);
    p.fill(0);
    //stroke(200);
    p.stroke(237,34,93);
    p.fill(237,34,93);
    p.line(x1,y1,x1,cy); //opposite
    p.line(x1,cy,cx,cy);
    labels();
    p.noFill();
    p.line(cx,cy,x1,y1);
  }

  p.draw=function() {
    p.background(255);
    circle();
    x1y1();
    x2y2();
    arcCalc();
    calculations();
    trigCalcs();
  };

};
var myp5 = new p5(sketch);
