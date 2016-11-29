# p5.js-education
p5 education working group repo  
Tutorials for p5 website


General notes are here on the hackpad:  
https://p5jscon.hackpad.com/Education-working-group-S0hRN6JPIL2

Status of tutorial sets from p5 and Processing summarized here:   https://docs.google.com/spreadsheets/d/1sh3IwcCUY4Bm8N4fRZw6CwSDdQmmXgY_awjVj-UC8mo/edit#gid=0

Drop box with drawings etc. here - https://www.dropbox.com/home/p5jscon  

##Guide to contributing p5js tutorials

We invite educators, contributors and general enthusiasts to contribute p5js tutorials. The p5js project makes creative coding and open source development more accessible to a diverse community and we are excited to publish tutorials on all aspects of the development process. Our learning materials so far include guides on learning p5, programming technique and how to contribute to an open source project. 

We welcome new written tutorial contributions and this guide outlines the steps of how to propose, prepare and contribute. 

###How to get started:

* Check that your proposed topic has not already been covered. There is a working spreadsheet here that outlines in progress tutorials. If your topic is listed as in progress, perhaps you can add to work being done and contribute to preparing existing work for publication so please reach out to us.
* If your topic is not already covered and is not listed as in progress, please write a few sentences on what you propose to cover and email us this description at education@p5js.org. 


###How to prepare a p5js tutorial for publication online:
When your tutorial is ready for publication, please follow these steps to prepare your content for the p5js website. 


Prepare the content of your tutorial as a tutorial-name.hbs file with this [this basic structure](https://github.com/mayaman/p5js-website/blob/master/src/templates/pages/tutorials/test-tutorial.hbs]). As is shown in this file, it must contain a header as shown below:

![Screenshot 1](https://github.com/tegacodes/p5.js-education/raw/master/images/screenshot-1.png)

The folder containing your tutorial will be placed in the 'tutorials' folder of the p5js site.The file called index.hbs is the [p5js tutorials landing page,](http://p5js.org/tutorials/ ) and the test-tutorial.hbs file is the test tutorial. 


All content should go in the:
```
 <section role="region" label="main content"></section>
```
  tags on the page, with formatting defined by the 
  ```
  <h1> and <h2> tags, the <p> paragraph tags
  ```
  as is done shown on the [test tutorial page.](https://github.com/processing/p5.js-website/blob/master/src/templates/pages/tutorials/test-tutorial.hbs)
  
If your tutorial contains images, they are to be placed in the assets folder of the p5 site, in the location src/assets/tutorials/test-tutorial/images as shown below.

