# p5.js-education
p5 education working group repo  
Tutorials for p5 website


General notes are here on the hackpad:  
https://p5jscon.hackpad.com/Education-working-group-S0hRN6JPIL2

Status of tutorial sets from p5 and Processing summarized here:   https://docs.google.com/spreadsheets/d/1sh3IwcCUY4Bm8N4fRZw6CwSDdQmmXgY_awjVj-UC8mo/edit#gid=0 

Drop box with drawings etc. here - https://www.dropbox.com/home/p5jscon  

##Guide to preparing your tutorial for the p5js site

When writing tutorials for the p5 site, prepare the tutorial as an index.php file which has [this basic structure](https://github.com/processing/p5.js-website/blob/master/get-started/index.php). Your file should contain the html for your tutorial page and should be placed in a folder of the name of your tutorial (here my one is called 'trigonometry'. Your tutorial folder will be placed in the 'tutorials' folder of the p5js site with all the others. In the image below, the orange index.php is the tutorials landing page, the green index.php is the file I've made for the trigonometry tutorial.  

  <img src="https://github.com/tegacodes/p5.js-education/raw/master/images/_tutorials1.png" alt="alt text" width="400px">

###Guide to embedding p5 sketches into tutorials  
There are two methods for embedding sketches into html or php pages:   
####(1) Use an iframe 
The simplest solution is to use iframes. An iframe is basically a window into a nested page within a page, sandboxed from the rest of your page.  

In your tutorial folder (mine's called trigonometry) put the index.php file (the html of your tutorial) in the top level of your folder. Then create a folder for any images used and a folder for each embedded p5 sketch. In each p5 sketch folder (the one show is called unitCircle) there should be the sketch.js file which contains your sketch code and also the index.html file which is the html file that displays only your sketch.  

 <img src="https://github.com/tegacodes/p5.js-education/raw/master/images/_tutorialfileStructure.png" alt="tutorialFileStructure" width="400px">

You can then embed the p5js index files as iframes in the html page of your tutorial.  

For example, here is a sketch running:  
[http://p5js.org/tutorials/trigonometry/assets/unitCircle/embed.html](http://p5js.org/tutorials/trigonometry/assets/unitCircle/embed.html)

And here it is embedded in the p5 site using the code below:  
[http://p5js.org/tutorials/trigonometry/](http://p5js.org/tutorials/trigonometry/)

Embed code for the iframe:  
```
<iframe src="http://p5js.org/tutorials/trigonometry/assets/unitCircle/embed.html" width="600px" height="400px"></iframe>
```
and styling for the iframe (this could directly into a wordpress post or in a stylesheet):
```
<style> iframe{ border: none; } </style>
```
Only trick here is that you need to manually set the size of the iframe, so it works best if things are a standard size.

These instructions are taken from [here:](https://github.com/processing/p5.js/wiki/Embedding-p5.js)


####(2) Use instance mode
The other option is to use instance mode except it is a little more involved than using an iframe. 

Convert your p5 sketch to [instance mode](http://p5js.org/examples/examples/Instance_Mode_Instantiation.php). You can then set up a parent class for your sketch and call the class as a div in your sketch. 

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
