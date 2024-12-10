// GIF sequences
const openingGifs = ["opening1.gif", "opening2.gif"];
const yesGifs = ["yes1.gif", "yes2.gif", "yes3.gif", "yes4.gif"];
const noGifs = ["no1.gif", "no2.gif"];

// Element selectors
const gif = document.querySelector(".gif");
const apologyText = document.querySelector(".apology-text");
const buttonGroup = document.querySelector(".btn-group");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Indices for sequential play
let openingIndex = 0;
let yesIndex = 0;
let noIndex = 0;

// Play opening GIFs
function playOpeningGifs() {
    if (openingIndex < openingGifs.length) {
        gif.src = openingGifs[openingIndex];
        const delay = openingIndex === 0 ? 2000 : 3900; // Adjust duration per GIF
        openingIndex++;
        setTimeout(playOpeningGifs, delay);
    } else {
        gif.src = "beforebuttons.gif";
        setTimeout(showApologyText, 2000);
    }
}

// Show apology text
function showApologyText() {
    gif.classList.add("hidden");
    apologyText.classList.remove("hidden");
    setTimeout(showButtons, 2000);
}

// Show buttons
function showButtons() {
    apologyText.classList.add("hidden");
    gif.classList.remove("hidden");
    buttonGroup.classList.remove("hidden");
}

// Yes button click
yesBtn.addEventListener("click", () => {
    if (yesIndex < yesGifs.length) {
        gif.src = yesGifs[yesIndex];
        yesIndex++;
    } else {
        yesIndex = 0;
        gif.src = yesGifs[yesIndex];
    }
});

// No button click
noBtn.addEventListener("click", () => {
    gif.src = noGifs[noIndex];
    noIndex = (noIndex + 1) % noGifs.length; // Alternate between two GIFs
});

// Start the sequence on page load
window.onload = playOpeningGifs;
