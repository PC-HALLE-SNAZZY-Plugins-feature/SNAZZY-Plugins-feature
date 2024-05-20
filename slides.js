
// handle the visibility of the search container
const search_plugin = document.getElementById("search-plugins");
search_plugin.addEventListener("input", function (event) {
    if (search_plugin.value.length > 0)
        document.getElementById("search-container").style.display = 'block ';
    else
        document.getElementById("search-container").style.display = 'none ';
});


// handle the swiper transition 
const duration = 7000;
const carousel = document.querySelector(".carousel");
const carouselFirstChild = carousel.querySelector(".slider");
const slides = carousel.querySelectorAll(".slide");
const element = slides[slides.length - 1];
const styles = window.getComputedStyle(element);
let widthValue = element.offsetWidth;
let marginRight = parseInt(styles.marginRight);

function startCarousel() {

    let A_slides = Array.from(slides);
    let currentIndex = 0;
    const screenWidth = window.innerWidth;

    let width;

    function moveNext() {
        if (screenWidth >= 1026) {

            width = currentIndex === 0 ? widthValue : widthValue + marginRight;
        } else {
            width = widthValue + marginRight;
        }

        A_slides[currentIndex].classList.remove("active");

        carouselFirstChild.scrollLeft += width;


        const clonedSlide = A_slides[currentIndex].cloneNode(true);
        A_slides.push(clonedSlide);
        carouselFirstChild.appendChild(clonedSlide);
        if (A_slides.length > slides.length + 2) {

            carouselFirstChild.removeChild(A_slides[0]);
            carouselFirstChild.scrollLeft += -width;
            A_slides.shift();
            currentIndex--;


        }

        currentIndex = (currentIndex + 1);

        A_slides[currentIndex].classList.add("active");

    }

    let intervalId = setInterval(moveNext, duration);

    carousel.addEventListener("mouseenter", function () {
        clearInterval(intervalId);
    });

    carousel.addEventListener("mouseleave", function () {
        intervalId = setInterval(moveNext, duration);

    });

    const scrollRightBtn = document.getElementById("scrollRightBtn");


    scrollRightBtn.addEventListener("click", function () {
        moveNext();
    });

    scrollLeftBtn.addEventListener("click", function () {

        for (let i = 0; i < slides.length - 1; i++) {
            moveNext();

        }

    });
    carouselFirstChild.addEventListener('click', function (event) {

        const clickedSlide = event.target.closest('.slide');
        if (clickedSlide) {
            const index = Array.from(this.children).indexOf(clickedSlide);
            let deff = (index - currentIndex) > 0 ? (index - currentIndex) : (slides.length) + (index - currentIndex);
            console.log('deff', deff);
            console.log('index', index);
            console.log('currentIndex', currentIndex);

            for (let i = 0; i < deff; i++) {
                moveNext();
            }
            if (currentIndex > 1) carouselFirstChild.scrollLeft = width * 2;
            else carouselFirstChild.scrollLeft = width * currentIndex;

            // intervalId = setInterval(moveNext, duration);

        }
    });

}
if (slides.length > 1)
    document.addEventListener("DOMContentLoaded", startCarousel);




