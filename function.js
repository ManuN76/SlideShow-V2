// Slide show
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto

window.function = function (img, time, fit) {
  // fit
  fit = fit.value ?? "";
  fit = fit.toLowerCase();

  let objectFit = "cover";

  switch (objectFit) {
    case "fill":
    case "cover":
    case "contain":
    case "scale-down":
    case "none":
      objectFit = fit;
      break;
    default:
      objectFit = "cover";
  }

  // img
  img = img.value ?? "";
  if (img == "") return;
  let imgs = img.split(",");
  let htmlImg = "";
  for (let i = 0; i < imgs.length; i++) {
    htmlImg += `<div class="mySlides fade">
<img src="${imgs[i]}" style="width: calc(100vw - 15px); height:calc(100vh - 15px); object-fit: ${objectFit};" alt=""/>
</div>`;
  }

  // time
  time = time.value ?? 1;
  time = time * 1000;

  let ht = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<style>

body {font-family: Verdana, sans-serif;}

.mySlides {
  display: none;
 
  }

img {
 // vertical-align: middle;
  border-radius:15px;

  }

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
  width: 100vw;
  height: 100vh;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 2.5s;
  animation-name: fade;
  animation-duration: 2.5s;
}

@-webkit-keyframes fade {
  from {opacity: .2} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .2} 
  to {opacity: 1}
}

</style>
<body>

<div class="slideshow-container">
${htmlImg}
</div>

<script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, ${time}); // Change image every 2 seconds
}
</script>
</body>
</html>`;

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`;
  return uri;
};
