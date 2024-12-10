const gifElement = document.querySelector(".gif");
const question = document.querySelector(".question");
const btnGroup = document.querySelector(".btn-group");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const gifQueue = [
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

let currentGifIndex = 0;

// Play GIF by updating the src and waiting for its duration
function playGifSequence(queue, onComplete) {
    if (currentGifIndex >= queue.length) {
        if (onComplete) onComplete();
        return;
    }
    const { name, duration } = queue[currentGifIndex];
    gifElement.src = `${name}.gif`;
    gifElement.classList.remove("hidden");

    setTimeout(() => {
        currentGifIndex++;
        playGifSequence(queue, onComplete);
    }, duration);
}

// Start Opening GIFs
function playOpeningGifs() {
    playGifSequence(gifQueue, () => {
        question.innerText = "Will you forgive me?";
        gifElement.classList.add("hidden");
        setTimeout(() => {
            btnGroup.classList.remove("hidden");
        }, 1000);
    });
}

// Handle Yes Button Click
yesBtn.addEventListener("click", () => {
    btnGroup.classList.add("hidden");
    currentGifIndex = 0; // Reset index for yes GIFs
    playGifSequence(yesGifs, () => {
        question.innerText = "Thank you so much! ❤️";
    });
});

// Handle No Button Click
let noClickIndex = 0;
noBtn.addEventListener("click", () => {
    const { name, duration } = noGifs[noClickIndex % noGifs.length];
    gifElement.src = `${name}.gif`;
    gifElement.classList.remove("hidden");
    setTimeout(() => {
        gifElement.classList.add("hidden");
    }, duration);
    noClickIndex++;
});

// Start the entire sequence
window.onload = playOpeningGifs;
