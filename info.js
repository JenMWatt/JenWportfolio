// slideshow carosel for ux project

let slideIndexx = 1;
showSlides(slideIndexx);

// Next/previous controls;
function plusSlide(n) {
  showSlides(slideIndexx += n);
}

// Thumbnail image controls;
function currentSlidez(n) {
  showSlides(slideIndexx = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dot = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexx = 1}
  if (n < 1) {slideIndexx = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slides[slideIndexx-1].style.display = "block";
  dot[slideIndexx-1].className += " active";

} 


// first modal box for digital art


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


function plusSlidess(n) {
  showSlidess(slideIndex += n);
}

function currentSlide(n) {
  showSlidess(slideIndex = n);
}

function showSlidess(n) {
  var i;
  var slides = document.getElementsByClassName("gallerySlides");
  var dots = document.getElementsByClassName("hover-shadow cursor");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// modal for second box



function openModals() {
  document.getElementById("myModals").style.display = "block";
}

function closeModals() {
  document.getElementById("myModals").style.display = "none";
}


function plusSlidesss(n) {
  showSlidesss(slideIndex += n);
}

function currentSlides(n) {
  showSlidesss(slideIndex = n);
}

function showSlidesss(n) {
  var i;
  var slidess = document.getElementsByClassName("gallerySlidess");
  var dots = document.getElementsByClassName("demos");
  var captionText = document.getElementById("captions");
  if (n > slidess.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slidess.length}
  for (i = 0; i < slidess.length; i++) {
      slidess[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slidess[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  
}


// modal
var minimodal = document.getElementById("smolmodal");
// get image 

var imgmini = document.getElementById("miniimg");
var modalImg = document.getElementById("img1")
var minicaption = document.getElementById("minicaption");
imgmini.onclick = function () {
  minimodal.style.display="block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// get span that closes the modal

var span= document.getElementsByClassName("xclose")[0];

// action to close the modal with x

span.onclick = function(){
  minimodal.style.display = "none";
}

// second mini modal


var minimodal2 = document.getElementById("smolmodals");
// get image 

var imgmini2 = document.getElementById("miniimg2");
var modalImgs = document.getElementById("img2")
var minicaption2 = document.getElementById("minicaption2");
imgmini2.onclick = function () {
  minimodal2.style.display="block";
  modalImgs.src = this.src;
  captionText.innerHTML = this.alt;
}

// get span that closes the modal

var span= document.getElementsByClassName("xclosex")[0];

// action to close the modal with x

span.onclick = function(){
  minimodal2.style.display = "none";
}




// mobile menu


function myFunction(x) {
  x.classList.toggle("change");
}