let images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
]
let currentImage = 0;
let sliderImage = document.querySelector('.slider-image');
let prevBtn = document.querySelector('.slider-button-prev');
let nextBtn = document.querySelector('.slider-button-next');
let playBtn = document.querySelector('.slider-button-play');

function nextImage () {
    if (currentImage < images.length - 1) {
        currentImage++;
    }else {
        currentImage =0;
    }
    sliderImage.src = images[currentImage];  
}

function prevImage () {
    if (currentImage > 0) {
        currentImage--;
    }else {
        currentImage = images.length - 1;
    }
    sliderImage.src = images[currentImage];  
}

let interval;
function autoplay() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }else {
        interval = setInterval(() => {
            nextImage();
        }, 1000);
    }

    playBtn.children[0].classList.toggle("fa-play");
    playBtn.children[0].classList.toggle("fa-pause");

}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
playBtn.addEventListener('click', autoplay);
