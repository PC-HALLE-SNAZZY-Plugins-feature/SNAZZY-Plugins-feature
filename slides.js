
// handle the visibility of the search container
const search_plugin = document.getElementById("search-plugins");
search_plugin.addEventListener("input", function(event) {
    if(search_plugin.value.length > 0)
    document.getElementById("search-container").style.display = 'block ';
    else
    document.getElementById("search-container").style.display = 'none ';
  });


// handle the swiper transition 
const carousel = document.querySelector(".carousel");
const carouselFirstChild = carousel.querySelector(".slider");
const slides = carousel.querySelectorAll(".slide");
const element = slides[slides.length - 1];
const styles = window.getComputedStyle(element);
const  widthValue = element.offsetWidth ;
const marginRight = parseInt(styles.marginRight);

function startCarousel() {

    let A_slides =  Array.from(slides);
    let currentIndex = 0; 
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1026) {
        const lastSlide = A_slides[A_slides.length-1].cloneNode(true);
        carouselFirstChild.insertBefore(lastSlide, carouselFirstChild.firstChild);
    } 

    // let width;
   
    function moveNext() {
        if(screenWidth >= 1026){

            width = currentIndex === 0 ? widthValue : widthValue + marginRight;
        }else{
            width =  widthValue + marginRight;
        }

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
    
    let intervalId = setInterval(moveNext, 7000); 
    
    carousel.addEventListener("mouseenter", function() {
        clearInterval(intervalId);
    });
    
    carousel.addEventListener("mouseleave", function() {
        intervalId = setInterval(moveNext, 7000); 

    });
}
if(slides.length > 1)
document.addEventListener("DOMContentLoaded", startCarousel);




