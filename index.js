const wrapper = document.querySelector(".wrapper");
const gif = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let noClickCount = 0;

// GIF Display Flow
const gifSequence = ["opening1.gif", "opening2.gif", "beforebuttons.gif"];
let currentGif = 0;

const yesGifs = ["yes1.gif", "yes2.gif", "yes3.gif", "yes4.gif"];
const noGifs = ["no1.gif", "no2.gif"];

function displayNextGif() {
    currentGif++;
    if (currentGif < gifSequence.length) {
        gif.src = gifSequence[currentGif];
    } else {
        gif.classList.add("hidden");
        btnGroup.classList.remove("hidden");
    }
}

// Handle Yes Button
yesBtn.addEventListener("click", () => {
    gif.classList.remove("hidden");
    btnGroup.classList.add("hidden");
    let i = 0;
    const yesInterval = setInterval(() => {
        gif.src = yesGifs[i];
        i++;
        if (i >= yesGifs.length) clearInterval(yesInterval);
    }, 2000); // Adjust timing to match your GIF durations
});

// Handle No Button
noBtn.addEventListener("click", () => {
    gif.src = noGifs[noClickCount % noGifs.length];
    noClickCount++;
});

// Play through opening GIFs on load
gif.addEventListener("load", () => {
    setTimeout(displayNextGif, 2000); // Adjust timing to match your GIF durations
});
