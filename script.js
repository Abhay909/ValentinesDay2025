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
  // Pause the current video
  const currentVideo = document.querySelector('.video-slide.active video');
  if (currentVideo) {
    currentVideo.pause();
  }

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
  "I will always swashi until the end of time",
  "Just remebember that I poshi u infinity percent",
  "I love my mammai, she is so beautiful",
  "Poshi poshi poshi, poshi poshi yee",
  "Mammai is the best mammai in the world",
  "Happy Valentines day mammoi",
  "Did you know I didnt do much in robotics today?", 
  "Mammaoi, mammoi, chi-la-la-la",
  "Mammai is so awesome, oooo waa waa ooo wah, mammai is a possum.",
  "Please explain to me why you are so awesome",
  "I love you so much mammai",
  "I love you more than anything in the world",
];

const generateMessage = document.getElementById('generateMessage');
const loveMessage = document.getElementById('loveMessage');
let messageTimeout = null; // To track the timeout

generateMessage.addEventListener('click', () => {
  // Clear any existing timeout
  if (messageTimeout) {
    clearTimeout(messageTimeout);
  }

  // Generate a random message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  loveMessage.textContent = randomMessage;

  // Fade in the message
  loveMessage.style.opacity = 1;

  // Fade out the message after 3 seconds
  messageTimeout = setTimeout(() => {
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
const downloadPhotoButton = document.getElementById('downloadPhoto');

// Access the camera and mirror the video
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    photoBoothVideo.srcObject = stream;
  })
  .catch((error) => {
    console.error('Error accessing camera:', error);
  });

// Capture Photo
capturePhotoButton.addEventListener('click', () => {
  const ctx = photoCanvas.getContext('2d');

  // Mirror the captured photo
  ctx.translate(photoCanvas.width, 0);
  ctx.scale(-1, 1);

  // Draw the video frame onto the canvas
  ctx.drawImage(photoBoothVideo, 0, 0, photoCanvas.width, photoCanvas.height);

  // Reset the transformation
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  // Show the canvas and download button
  photoCanvas.style.display = 'block';
  downloadPhotoButton.style.display = 'block';
});

// Download Photo
downloadPhotoButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'valentine-photo.png';
  link.href = photoCanvas.toDataURL('image/png');
  link.click();
});