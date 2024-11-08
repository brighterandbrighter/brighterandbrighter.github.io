// Add the buttons to convert to image
  document.getElementById("image").innerHTML = "<p>If you're happy, click the button to turn your table into an image you can save.<br/><button id='renderFullImage'>Screenshot table</button><div id='previewImage'></div><div id='downloadImage'></div>";
  
  document.getElementById("renderFullImage").addEventListener('click', function(){snapshot("mytable")}, false);

  function snapshot(element) {
    html2canvas(document.getElementById(element)).then(function(canvas) {
    let getFullCanvas = canvas;
      
      // generate an image element
      var imageData = document.createElement('img');
      
      // get the data from the canvas and apply it to the image
      imageData.src = getFullCanvas.toDataURL("image/png");
      
      // now append the image to the previewImage div
      document.getElementById("previewImage").appendChild(imageData);
    }); 
  }åå