# p5.js-education
p5 education working group repo  
Tutorials for p5 website


General notes are here on the hackpad:  
https://p5jscon.hackpad.com/Education-working-group-S0hRN6JPIL2

Status of tutorial sets from p5 and Processing summarized here:   https://docs.google.com/spreadsheets/d/1sh3IwcCUY4Bm8N4fRZw6CwSDdQmmXgY_awjVj-UC8mo/edit#gid=0 

Drop box with drawings etc. here - https://www.dropbox.com/home/p5jscon  

###Guide to embedding p5 sketches into tutorials
There are two methods for embedding sketches into html or php pages:   
####(1) Use an iframe 
The simplest solution is to use iframes. An iframe is basically a window into a nested page within a page, sandboxed from the rest of your page. For classes, I have students host their work and turn in a link to running sketches. Then I can embed their sketches or examples I create in iframes on a wordpress blog or class site.

For example, here is a sketch running:
[http://p5js.org/test/embed.html](http://p5js.org/test/embed.html)

And here it is embedded in wordpress using the code below:
[http://lauren-mccarthy.com/inmotion/2014/08/test-post-1/](http://lauren-mccarthy.com/inmotion/2014/08/test-post-1/)

Embed code for the iframe:
```
<iframe src="http://p5js.org/test/embed.html" width="600px" height="400px"></iframe>
```
and styling for the iframe (this could directly into a wordpress post or in a stylesheet):
```
<style> iframe{ border: none; } </style>
```
Only trick here is that you need to manually set the size of the iframe, so it works best if things are a standard size.

These instructions are taken from [here:](https://github.com/processing/p5.js/wiki/Embedding-p5.js)


####(2) Use instance mode
Converting your p5 sketch to [instance mode](http://p5js.org/examples/examples/Instance_Mode_Instantiation.php). You can then set up a parent class for your sketch and call the class as a div in your sketch. 

You will need to convert your sketch making the following changes. This code is a file called unitCircle.js.

```javascript
var sketch = function( p ) { //1. set up instance of your sketch and call it p - this means your whole sketch will go into {} as a block of code
  var cx=40;
  var cy=20;

  p.setup= function() {   //2. Change set up and draw to look like this. The p. in front indicates these belong to your instance called p.
    var myCanvas = p.createCanvas(600, 400); // 3. all p5 functions must now have the prefix "p." as they are part of the p instance. Here createCanvas is now p.createCanvas. 
    myCanvas.parent('unitCircle'); //4. After you have created your canvas, here mine's called myCanvas, set up parent class called unitCircle or whatever you want to call your sketch.
  };

  p.draw=function() {  //<--- change draw too!
    p.background(255);  //<--- and don't forget the p in front of all of your p5 functions.
    p.ellipse(cx,cy,20,20);
  };
};

var myp5 = new p5(sketch); //5. last of all you end with this line. 
```

And then on your html/php page:  
* Add in your path to your javascript file at the top. I've got mine in a folder called assets.  
```  
<script language="javascript" src="assets1/unitCircle.js"></script>
```
* Make sure your paths to the p5 libraries are good too.  
* Then, whereever you want your sketch to show up, embed your parent class as a div:  

```javascript
<div id="unitCircle" style="position:relative;"></div>
```
