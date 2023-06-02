
const observerOptions = {
  rootMargin: '1000px 0px 0px 0px',
  threshold: 0.7
};


const observe = entries => entries.forEach(entry => {
  entry.target.classList.toggle('inviewport', entry.isIntersecting);
});


const obs = new IntersectionObserver(observe, observerOptions);
document.querySelectorAll('article').forEach(el => obs.observe(el));

document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  showSlides(slideIndex);

  const prevButton = document.querySelector(".left.carousel-control");
  const nextButton = document.querySelector(".right.carousel-control");

  prevButton.addEventListener("click", function() {
    changeSlide(-1);
  });

  nextButton.addEventListener("click", function() {
    changeSlide(1);
  });

  function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n >= slides.length) {
        slideIndex = 0;
    }
    
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
  }
});
