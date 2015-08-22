# p5.js-education
p5 education working group repo  
Tutorials for p5 website


General notes are here on the hackpad:  
https://p5jscon.hackpad.com/Education-working-group-S0hRN6JPIL2

Status of tutorial sets from p5 and Processing summarized here:   https://docs.google.com/spreadsheets/d/1sh3IwcCUY4Bm8N4fRZw6CwSDdQmmXgY_awjVj-UC8mo/edit#gid=0 

Drop box with drawings etc. here - https://www.dropbox.com/home/p5jscon  

###Guide to embedding p5 sketches into tutorials
There are two methods for embedding sketches into html or php pages:   
(1) by using an iframe as outlined [here](https://github.com/processing/p5.js/wiki/Embedding-p5.js)


(2) by converting your p5 sketch to [instance mode](http://p5js.org/examples/examples/Instance_Mode_Instantiation.php). You can then set up a parent class for your sketch and call the class as a div in your sketch. See below:

'''
var sketch = function( p ) { //set up instance of your sketch and call it p
  var cx=40;
  var cy=20;

  p.setup= function() {   //write set up like this now. With the p. in front that indicates your instance
    var myCanvas = p.createCanvas(600, 400); //all p5 functions must now have the prefix "p." as they are part of the p instance. Here createCanvas is now p.createCanvas
    myCanvas.parent('unitCircle'); //set up parent class called unitCircle
  };

  p.draw=function() {
    p.background(255); 
    p.ellipse(cx,cy,20,20);
  };
};

var myp5 = new p5(sketch); //last of all you end with this line. 
'''
And then embed your parent class into your html/php page wherever you want it:
'''
<div id="unitCircle" style="position:relative;"></div>
'''
