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
