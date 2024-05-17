
// handle the visibility of the search container
const search_plugin = document.getElementById("search-plugins");
search_plugin.addEventListener("input", function(event) {
    if(search_plugin.value.length > 0)
    document.getElementById("search-container").style.display = 'block ';
    else
    document.getElementById("search-container").style.display = 'none ';
  });


// handle the swiper transition 
function startCarousel() {

    let carousel = document.querySelector(".carousel");
    let carouselFirstChild = carousel.firstElementChild;
    let slides = carousel.querySelectorAll(".slide");
  
    let currentIndex = 0; 
    
    function moveNext() {
        // let width = slides[currentIndex].offsetWidth;
        
        let width = slides[currentIndex].offsetWidth;
        carouselFirstChild.scrollLeft += width;
    slides[currentIndex].classList.remove("active");
    ArrayFromSlides = Array.from(slides); 
    let activeSlide = slides[currentIndex];
    let indexToRemove = ArrayFromSlides.indexOf(activeSlide);
    ArrayFromSlides.splice(indexToRemove, 1);
    ArrayFromSlides.push(slides[currentIndex]);
    carouselFirstChild.appendChild(slides[currentIndex]);

    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
    
//  if (currentIndex === 0) {
//         carousel.scrollLeft = 0;
//     } 
    }
    
    let intervalId = setInterval(moveNext, 3000); 
    
    carousel.addEventListener("mouseenter", function() {
        clearInterval(intervalId);
    });
    
    carousel.addEventListener("mouseleave", function() {
        intervalId = setInterval(moveNext, 25000);
    });
}

document.addEventListener("DOMContentLoaded", startCarousel);




