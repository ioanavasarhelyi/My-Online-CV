var slideIndex = 1;
var timer = null;

showSlides(slideIndex);

 function plusSlides(n) {
     clearTimeout(timer);
  showSlides((slideIndex += n));
};

 function currentSlide(n) {
     clearTimeout(timer);
  showSlides((slideIndex = n));
};

 function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n==undefined){n = ++slideIndex};
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timer= setTimeout(showSlides, 2000);
  
};

var slideIndex2 = 1;

showSlides2(slideIndex2);

 function plusSlides2(n) {
     
  showSlides2((slideIndex2 += n));
};

 function currentSlide2(n) {
    
  showSlides2((slideIndex2 = n));
};

 function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  var captionText = document.getElementById("caption");
  
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active2";
  captionText.innerHTML = dots[slideIndex2-1].alt;
};


// scroll button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// form button

const sendBtn = document.querySelector(".send-button");
const nameText = document.querySelector(".name-input");
const emailText = document.querySelector(".email-input");
const messageText = document.querySelector(".contact-form textarea");
const formData = document.querySelector(".contact-form");


 function sendMessage() {
  if(nameText && emailText && messageText) {
       formData.reset();
       
  }      
  }
