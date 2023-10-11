// Fecha de referencia: 21 de Abril del 2021 a las 11:48 AM
const targetDate = new Date('2021-04-21T11:48:00');

// Para agregar una imagen nueva, coloca la imagen en la carpeta "img", luego agrega el path de la imagen en el arreglo de "image"
const images = [
    './img/20221216_155104.jpg',
    './img/20221216_172544.jpg',
    './img/WhatsApp Image 2023-08-24 at 16.11.21.jpg',
    './img/IMG_20220502_184031_312.jpg',
    './img/20221216_172538.jpg',
    './img/IMG-20231008-WA0029.jpg',
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    document.body.style.backgroundImage = `url('${preloadedImages[currentImageIndex].src}')`;
    currentImageIndex = (currentImageIndex + 1) % preloadedImages.length;
}

// Precargar imágenes al cargar la página
const preloadedImages = images.map(imageSrc => {
    const img = new Image();
    img.src = imageSrc;
    return img;
});

// Mostrar la primera imagen inmediatamente
changeBackgroundImage();

// Cambiar la imagen cada 5 segundos
setInterval(changeBackgroundImage, 5000);

// Funcion para actualizar el contador del tiempo tanscurrido desde la fecha de referencia
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = currentDate - targetDate;

    const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor((timeDifference % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
    const days = Math.floor((timeDifference % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Actualizar el contador cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);
