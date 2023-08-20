const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
let currentIndex = 0;
const slideshowImg = document.getElementById('slideshowImg');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const goToLinks = document.getElementById("GoToLink");
const make = document.getElementById('makePro');
const faviconLink = document.querySelector('link[rel="icon"]');
const body = document.body;
const allElements = document.querySelectorAll('*');

make.addEventListener('click', () => {
    window.location.href = "test.html";
});

goToLinks.addEventListener('click', () => {
    window.location.href = "https://www.istockphoto.com/";
});

function updateImage() {
    slideshowImg.src = `static/images/${images[currentIndex]}`;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    showNextImage();
});

updateImage();

setInterval(showNextImage, 5000);

function checkInternetConnection() {
    const online = navigator.onLine;

    if (online) {
        faviconLink.href = 'static/images/Add User-rafiki.png';
        
    } else {
        window.location.href = "error.html";
    }
}

checkInternetConnection();
setInterval(checkInternetConnection, 1000);
