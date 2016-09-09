##Guide to contributing p5js tutorials

We invite educators, contributors and general enthusiasts to propose and write p5js tutorials. The p5js project has a commitment to making creative coding and open source development more accessible to a diverse community and are excited to publish tutorials on all aspects of the development process. Our learning materials include guides on working with p5, learning to program, programming technique and how to contribute to an open source project. 

We welcome new written tutorial contributions here and this guide outlines the steps of how to propose, prepare and contribute. 

* Check that your proposed topic has not already been covered. There is a working spreadsheet here that outlines in progress tutorials. If your topic is listed as in progress, there is likely to be contributions that you could make in editing or preparing existing work for publication so please reach out to us about this. 
* If your topic is not already covered or in progress, please write a few sentences on what you propose to cover and email us this description at eductation@processing.org. 

###How to prepare a p5js tutorial for publication online:

When your tutorial is ready for publication, please follow these steps to prepare your content for the p5js website. 
The content of your tutorial should be prepared as an index.php file with this [this basic structure](https://github.com/processing/p5.js-website/blob/master/get-started/index.php). Your file should contain your content as html and be placed in a folder of the name of your tutorial (here is [an example called 'trigonometry')](https://github.com/processing/p5.js-website/blob/master/tutorials/trigonometry/index.php). The folder containing your tutorial will be placed in the 'tutorials' folder of the p5js site. In the screenshot below, the orange index.php is the [p5js tutorials landing page,](http://p5js.org/tutorials/) the green index.php is the page of the trigonometry tutorial. The folder labelled images contains the image files of the page. The folders labelled sincoscurve and unitCircle contain the p5js examples embedded in the tutorials.

  <img src="https://github.com/tegacodes/p5.js-education/raw/master/images/_tutorials1.png" alt="alt text" width="400px">


Use the html header tags, paragraph tags and section divisions as is done in the [getting started page](https://github.com/processing/p5.js-website/blob/master/get-started/index.php) as a guide. To correctly format code in the html of the page use the tag: 
```
<pre><code class="language-javascript">   
Your code here!    
</code></pre>    
```
###Embedding p5js sketches 
Using p5js means you can illustrate your tutorial with animated, interactive or editable code examples to demonstrate coding concepts, for example what happens when a variable is changed. Your examples should be prepared as p5js sketches and can be embedded into the tutorial in two ways.  

1. If the example is to be animated and/or interactive but not editable. The p5js sketch should be embedded into the page as an iframe. See the section below for how to embed an iframe.
2. You may want your examples to be editable like they are on the [reference pages](http://p5js.org/reference/#/p5/ellipse) of the p5js site. This enables readers to change the code and see the results. To do this, the p5 sketch should be embedded into the html page using the p5js widgit. Follow [this guide](https://toolness.github.io/p5.js-widget/) on how to embed p5js sketches using the widgit written by [Toolness](https://github.com/toolness).


####Embedding a p5 sketch as an iframe.

When writing tutorials for the p5 site, prepare the tutorial as an index.php file which has [this basic structure](https://github.com/processing/p5.js-website/blob/master/get-started/index.php). Your file should contain the html for your tutorial page and should be placed in a folder of the name of your tutorial (here my one is called 'trigonometry'. Your tutorial folder will be placed in the 'tutorials' folder of the p5js site with all the others. In the screenshot below, the orange index.php is the [tutorials landing page,](http://p5js.org/tutorials/) the green index.php is my trigonometry tutorial.  

  <img src="https://github.com/tegacodes/p5.js-education/raw/master/images/_tutorials1.png" alt="alt text" width="400px">

Use the html header tags, paragraph tags and section divisions using the page linked above as a guide. You may also want to embed p5 sketchs.


####(1) Embed a p5 sketch using an iframe
The simplest solution is to use iframes. An iframe is basically a window to another page, sandboxed from the rest of your page. In this case it will be a window to the index.html containing your p5js sketch. 

In your tutorial folder (here it's called trigonometry) put the index.php file (this is the html of your tutorial) in the top level of your folder. Then create a folder for any images used and a folder for each embedded p5 sketch. In each p5 sketch folder (see the one below is called unitCircle) there should be the sketch.js file which contains your p5 sketch code and also the embed.html file which is the html file that will be embedded on your tutorial page.  

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

Also note that you do not need links to any of your .js files nor links to the p5.js files if you embed this way. This is because you are just creating a window to see through to the html page of your naked sketch. The js paths are all happening in the embed.html page which we are looking through to. Here's a really crap drawing that shows what's going on...

 <img src="https://github.com/tegacodes/p5.js-education/raw/master/images/iframe-2.jpg" alt="tutorialFileStructure" width="600px">

More information on embedding p5js sketches can be found [here.](https://github.com/processing/p5.js/wiki/Embedding-p5.js)


