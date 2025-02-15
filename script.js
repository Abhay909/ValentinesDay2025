// Mute Button
const bgMusic = document.getElementById('bgMusic');
const muteButton = document.getElementById('muteButton');

muteButton.addEventListener('click', () => {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    muteButton.textContent = '🔇 Mute';
  } else {
    bgMusic.muted = true;
    muteButton.textContent = '🔊 Unmute';
  }
});

// Falling Hearts Effect
const heartButton = document.getElementById('heartButton');
const heartRain = document.getElementById('heartRain');

heartButton.addEventListener('click', () => {
  // Clear existing hearts
  heartRain.innerHTML = '';

  // Create falling hearts
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Randomize speed
    heart.style.fontSize = Math.random() * 30 + 20 + 'px'; // Randomize size
    heartRain.appendChild(heart);
  }

  // Remove hearts after animation
  setTimeout(() => {
    heartRain.innerHTML = '';
  }, 5000);
});
// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => slide.classList.remove('active'));
  // Show the current slide
  slides[index].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
});

document.querySelector('.next').addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
});

// Video Carousel
let videoIndex = 0;
const videoSlides = document.querySelectorAll('.video-slide');
const totalVideoSlides = videoSlides.length;

function showVideoSlide(index) {
  // Hide all videos
  videoSlides.forEach((video) => video.classList.remove('active'));
  // Show the current video
  videoSlides[index].classList.add('active');
}

document.querySelector('.prev-video').addEventListener('click', () => {
  videoIndex = (videoIndex - 1 + totalVideoSlides) % totalVideoSlides;
  showVideoSlide(videoIndex);
});

document.querySelector('.next-video').addEventListener('click', () => {
  videoIndex = (videoIndex + 1) % totalVideoSlides;
  showVideoSlide(videoIndex);
});

// Love Message Generator
const messages = [
  "You are the best mom in the world!",
  "I love you to the moon and back!",
  "Thank you for always being there for me.",
  "You make every day brighter!",
  "I’m so grateful to have you in my life.",
];

const generateMessage = document.getElementById('generateMessage');
const loveMessage = document.getElementById('loveMessage');

generateMessage.addEventListener('click', () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  loveMessage.textContent = randomMessage;
  loveMessage.style.opacity = 1;
  setTimeout(() => {
    loveMessage.style.opacity = 0;
  }, 3000);
});

// Heart Drawing
const heartCanvas = document.getElementById('heartCanvas');
const ctx = heartCanvas.getContext('2d');
let isDrawing = false;

heartCanvas.addEventListener('mousedown', () => {
  isDrawing = true;
  ctx.beginPath();
});

heartCanvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#e63946';
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});

heartCanvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

document.getElementById('clearCanvas').addEventListener('click', () => {
  ctx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);
});

// Love Meter
const loveMeter = document.getElementById('loveMeter');
const loveMeterValue = document.getElementById('loveMeterValue');

loveMeter.addEventListener('input', () => {
  loveMeterValue.textContent = `${loveMeter.value}%`;
});

// Photo Booth
const photoBoothVideo = document.getElementById('photoBoothVideo');
const photoCanvas = document.getElementById('photoCanvas');
const capturePhotoButton = document.getElementById('capturePhoto');

navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    photoBoothVideo.srcObject = stream;
  })
  .catch((error) => {
    console.error('Error accessing camera:', error);
  });

capturePhotoButton.addEventListener('click', () => {
  const ctx = photoCanvas.getContext('2d');
  ctx.drawImage(photoBoothVideo, 0, 0, photoCanvas.width, photoCanvas.height);
});