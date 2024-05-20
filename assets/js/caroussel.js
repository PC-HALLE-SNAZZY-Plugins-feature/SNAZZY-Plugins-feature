const carousel = document.getElementById('carousel');
const carousel2 = document.getElementById('carousel2');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
let currentIndex = 0;
const cardWidth = document.querySelector('.carousel-card').offsetWidth;
const cardsVisible = 3; // Number of cards visible at a time
const totalCards = carousel.children.length;

nextButton.addEventListener('click', () => {
    if (currentIndex < totalCards - cardsVisible) {
        currentIndex = currentIndex + 3;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex = currentIndex - 3;
    } else {
        currentIndex = totalCards - cardsVisible;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * (cardWidth + 20); // Adjust based on card width and margin
    carousel.style.transform = `translateX(${offset}px)`;
    carousel2.style.transform = `translateX(${offset}px)`;
}



// handle the visibility of the search container
const search_plugin = document.getElementById("search-plugins");
search_plugin.addEventListener("input", function(event) {
    if(search_plugin.value.length > 0)
    document.getElementById("search-container").style.display = 'block ';
    else
    document.getElementById("search-container").style.display = 'none ';
  });


// handle the swiper transition 
const duration = 7000;
const slidescarousel = document.querySelector(".slides_carousel");
const carouselFirstChild = carousel.querySelector(".slider");
const slides = carousel.querySelectorAll(".slide");
const element = slides[slides.length - 1];
const styles = window.getComputedStyle(element);
let  widthValue = element.offsetWidth ;
let marginRight = parseInt(styles.marginRight);

function startCarousel() {

    let A_slides =  Array.from(slides);
    let currentIndex = 0; 
    const screenWidth = window.innerWidth;

    // if (screenWidth >= 1026) {
    //     const lastSlide = A_slides[A_slides.length-1];
    //     carouselFirstChild.insertBefore(lastSlide, carouselFirstChild.firstChild);
    // } 

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
            
            
        }

        currentIndex = (currentIndex + 1)  ;

        A_slides[currentIndex].classList.add("active");
    
    }

    let intervalId = setInterval(moveNext, duration); 
    
    carousel.addEventListener("mouseenter", function() {
        clearInterval(intervalId);
    });
    
    carousel.addEventListener("mouseleave", function() {
        intervalId = setInterval(moveNext, duration); 
        
    });

    const scrollRightBtn = document.getElementById("scrollRightBtn");
    

    scrollRightBtn.addEventListener("click", function() {
        clearInterval(intervalId); 
        moveNext()
        intervalId = setInterval(moveNext, duration);
    });

    scrollLeftBtn.addEventListener("click", function() {
        clearInterval(intervalId); 
        for(let i = 0 ; i<slides.length - 1;i++) {
            moveNext();
            
        }
        intervalId = setInterval(moveNext, duration);
    });
    carouselFirstChild.addEventListener('click', function(event) {
        // clearInterval(intervalId); 

        const clickedSlide = event.target.closest('.slide');
        if (clickedSlide) {
            const index = Array.from(this.children).indexOf(clickedSlide);
            let deff = (index - currentIndex ) > 0 ? (index - currentIndex ) : (slides.length  ) +(index - currentIndex);
            console.log('deff',deff);
            console.log('index',index);
            console.log('currentIndex',currentIndex);

            for(let i = 0 ; i<deff;i++) {
                moveNext();
            }
           if(currentIndex > 1) carouselFirstChild.scrollLeft = width * 2;
           else  carouselFirstChild.scrollLeft =width* currentIndex ;

            // intervalId = setInterval(moveNext, duration);

        }
    });

}
if(slides.length > 1)
document.addEventListener("DOMContentLoaded", startCarousel);




