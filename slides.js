function startCarousel() {

    var carousel = document.querySelector(".carousel");
    var slides = carousel.querySelectorAll(".slide");
    
    var currentIndex = 0; 
    
    function moveNext() {
      
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    }
    
    var intervalId = setInterval(moveNext, 3000); 
    
    carousel.addEventListener("mouseenter", function() {
        clearInterval(intervalId);
    });
    
    carousel.addEventListener("mouseleave", function() {
        intervalId = setInterval(moveNext, 3000);
    });
}

document.addEventListener("DOMContentLoaded", startCarousel);
