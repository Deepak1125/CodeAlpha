let h1 = document.querySelector(".header h1");
let img = document.querySelector(".imgs img");
let audiosng = document.querySelector(".audio-player audio");
let shuffle = document.querySelector(".controls1 #i1");
let pause = document.querySelector(".controls1 #i3");
let repeat = document.querySelector(".controls1 #i5");
let heart = document.querySelector(".header img");
let forward = document.querySelector(".controls1 #i4");
let backward = document.querySelector(".controls1 #i2");

arr2 = ["Putene Prema", "Odiyamma", "Ninnila Ninnila", "Thee Thalapathy", "Inthandham"];
arr3 = ["../photos/Puttene Prema.mp3", "../photos/Odiyamma.mp3", "../photos/Ninnila.mp3", "../photos/Thee Thalapathy.mp3", "../photos/Inthandham.mp3"];

function random() {
    let random1 = Math.floor(Math.random() * arr1.length);
    let id = arr1.indexOf(img.src);
    if (random1 !== id) {
        return random1;
    } else {
        return random();
    }
}

function auto() {
    audio.play();
    pause.src = "../photos/music_pause.png";
    heart.src = "../photos/heart.png";
}

let arr1 = [
    "https://i.scdn.co/image/ab67616d0000b2731f702861ed523c43d172eae1",
    "https://i.scdn.co/image/ab67616d0000b273d84e64d1b61248cc16dc5efd",
    "https://i.scdn.co/image/ab67616d0000b273dc3c4874fca4c0246bbbdb0e",
    "https://i.scdn.co/image/ab67616d0000b2739d085e3c00e22bda745185ed",
    "https://i.scdn.co/image/ab67616d0000b27385efa87a5eafe030b2495b7e"
];

function checksrc() {
    let currentSrc = img.getAttribute("src");
    return arr1.indexOf(currentSrc);
}

function frwd() {
    if (repeat.src.includes("repeat_on.png")) {
        auto();
    } else {
        let idx = (checksrc() + 1) % 5;
        img.setAttribute("src", arr1[idx]);
        audiosng.src = arr3[idx];
        h1.textContent = arr2[idx];
        auto();
    }
}

function bckwd() {
    if (repeat.src.includes("repeat_on.png")) {
        auto();
    } else {
        let idx = (checksrc() - 1 + 5) % 5;
        img.setAttribute("src", arr1[idx]);
        audiosng.src = arr3[idx];
        h1.textContent = arr2[idx];
        auto();
    }
}

forward.addEventListener("click", frwd);
backward.addEventListener("click", bckwd);

shuffle.addEventListener("click", () => {
    let a = random();
    let x = arr1[a];
    let y = arr3[a];
    let z = arr2[a];
    img.src = x;
    audiosng.src = y;
    h1.textContent = z;
    auto();
});

pause.addEventListener("click", () => {
    let imgSrc1 = "../photos/music_play.png";
    let imgSrc2 = "../photos/music_pause.png";
    if (pause.src.includes("music_play.png")) {
        pause.src = imgSrc2;
        audio.play();
    } else {
        pause.src = imgSrc1;
        audio.pause();
    }
});

repeat.addEventListener("click", () => {
    let imgSrc1 = "../photos/repeat_on.png";
    let imgSrc2 = "../photos/repeat.png";
    if (repeat.src.includes("repeat.png")) {
        repeat.src = imgSrc1;
    } else {
        repeat.src = imgSrc2;
    }
});

heart.addEventListener("click", () => {
    let imgSrc1 = "../photos/red_heart.png";
    let imgSrc2 = "../photos/heart.png";
    if (heart.src.includes("red_heart.png")) {
        heart.src = imgSrc2;
    } else {
        heart.src = imgSrc1;
    }
});

const audio = document.getElementById('audio');
const progressBar = document.getElementById('progress-bar');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

audio.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    currentTime.textContent = formatTime(audio.currentTime);
});

progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

document.addEventListener('DOMContentLoaded', () => {
    duration.textContent = formatTime(audio.duration);
});
