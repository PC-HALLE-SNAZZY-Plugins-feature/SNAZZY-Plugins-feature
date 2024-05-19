
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
    let carouselFirstChild = carousel.querySelector(".slider");
    let slides = carousel.querySelectorAll(".slide");
    let A_slides =  Array.from(slides);
    let currentIndex = 0; 

    const lastSlide = A_slides[A_slides.length-1].cloneNode(true);
    // A_slides.unshift(lastSlide);
    carouselFirstChild.insertBefore(lastSlide, carouselFirstChild.firstChild);
    
    function moveNext() {
        
        let width = currentIndex === 0 ? 170 : 180;

        A_slides[currentIndex].classList.remove("active");
    
        carouselFirstChild.scrollLeft += width;
    
        
        const clonedSlide = A_slides[currentIndex].cloneNode(true);
        A_slides.push(clonedSlide);
        carouselFirstChild.appendChild(clonedSlide);
        if(A_slides.length > slides.length + 2){
            
            carouselFirstChild.removeChild(A_slides[0]);
            carouselFirstChild.scrollLeft += -width;
            A_slides.shift();
            currentIndex--;
            console.log('A_slides',A_slides);
            
        }

        currentIndex = (currentIndex + 1)  ;

        A_slides[currentIndex].classList.add("active");
    
    }
    
    let intervalId = setInterval(moveNext, 3000); 
    
    carousel.addEventListener("mouseenter", function() {
        clearInterval(intervalId);
    });
    
    carousel.addEventListener("mouseleave", function() {
        intervalId = setInterval(moveNext, 3000); 

    });
}

document.addEventListener("DOMContentLoaded", startCarousel);




