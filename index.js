const gif = document.querySelector(".gif");
const question = document.querySelector(".question");
const btnGroup = document.querySelector(".btn-group");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const gifSequence = [
    { name: "opening1", duration: 2000 },
    { name: "opening2", duration: 3900 },
    { name: "beforebuttons", duration: 2000 },
];

const yesGifs = [
    { name: "yes1", duration: 2000 },
    { name: "yes2", duration: 2000 },
    { name: "yes3", duration: 2220 },
    { name: "yes4", duration: 2600 },
];

const noGifs = [
    { name: "no1", duration: 1920 },
    { name: "no2", duration: 2940 },
];

let noClickCount = 0;

// Helper function to play a GIF
function playGif(name, duration, callback) {
    gif.src = `${name}.gif`;
    gif.classList.remove("hidden");
    setTimeout(() => {
        gif.classList.add("hidden");
        if (callback) callback();
    }, duration);
}

// Function to play GIF sequence
function playGifSequence(sequence, index = 0, onComplete) {
    if (index >= sequence.length) {
        if (onComplete) onComplete();
        return;
    }

    const { name, duration } = sequence[index];
    playGif(name, duration, () => {
        playGifSequence(sequence, index + 1, onComplete);
    });
}

// Start the opening sequence
function startOpeningSequence() {
    playGifSequence(gifSequence, 0, () => {
        question.innerText = "Will you forgive me?";
        btnGroup.classList.remove("hidden");
    });
}

// Handle Yes button click
yesBtn.addEventListener("click", () => {
    btnGroup.classList.add("hidden");
    playGifSequence(yesGifs, 0, () => {
        question.innerText = "Thank you! ❤️";
        gif.classList.add("hidden");
    });
});

// Handle No button click
noBtn.addEventListener("click", () => {
    const { name, duration } = noGifs[noClickCount % noGifs.length];
    noClickCount++;
    playGif(name, duration);
});

// Start the sequence on page load
window.addEventListener("DOMContentLoaded", startOpeningSequence);
