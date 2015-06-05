window.onload = function() {
  examples.init();
}
var examples = {
  init: function(file) {
    var editors = $('.p5_editor');

    for (var i=0; i<editors.length; i++) {
      var exampleCode = $(editors[i]).text();

      try {       

        if (exampleCode.indexOf('new p5()') === -1) {
          exampleCode += '\nnew p5();';
        }


        var userScript = $('.p5_exampleFrame')[i].contentWindow.document.createElement('script');
        userScript.type = 'text/javascript';
        userScript.text = exampleCode;
        userScript.async = false;
        $('.p5_exampleFrame')[i].contentWindow.document.body.appendChild(userScript);

      } catch (e) {
        console.log(e);
      }
    }
  }

}