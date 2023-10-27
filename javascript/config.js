

const gallerySlides = document.querySelector('.gallery-slides');
const galleryImages = document.querySelectorAll('.gallery-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentIndex = 0;

function showImage(index) {
    const offset = -index * 100;
    gallerySlides.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

setInterval(nextImage, 5000); // Cambia de imagen automáticamente cada 5 segundos
