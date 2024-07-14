// script.js

const videos = [
    'videos/1.mp4',
    'videos/2.mp4',
    'videos/3.mp4'
];

const videoElement = document.querySelector("video");
let currentVideoIndex = 0;

function changeVideo() {
        console.log(videos[currentVideoIndex]);
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        videoElement.src = videos[currentVideoIndex];
        videoElement.play();
}

setInterval(changeVideo, 10000); 
