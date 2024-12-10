// Elements
const gif = document.getElementById("main-gif");
const apologyText = document.getElementById("apology-text");
const buttonGroup = document.getElementById("button-group");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// GIF sequences
const openingGifs = ["opening1.gif", "opening2.gif"];
const yesGifs = ["yes1.gif", "yes2.gif", "yes3.gif", "yes4.gif"];
const noGifs = ["no1.gif", "no2.gif"];

// Counters
let openingIndex = 0;
let yesIndex = 0;
let noIndex = 0;

// Play opening GIFs
function playOpeningGifs() {
    if (openingIndex < openingGifs.length) {
        gif.src = openingGifs[openingIndex];
        openingIndex++;
        setTimeout(playOpeningGifs, 2000); // Adjust timing as needed
    } else {
        gif.src = "beforebuttons.gif"; // Play the "before buttons" GIF
        setTimeout(showApologyText, 2000); // Show text after delay
    }
}

// Show apology text
function showApologyText() {
    gif.classList.add("hidden");
    apologyText.classList.remove("hidden");
    setTimeout(showButtons, 2000); // Show buttons after delay
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
        gif.src = "yes1.gif"; // Restart or show final GIF as desired
    }
});

// No button click
noBtn.addEventListener("click", () => {
    gif.src = noGifs[noIndex];
    noIndex = (noIndex + 1) % noGifs.length; // Alternate between the two GIFs
});

// Start the opening GIFs
window.onload = playOpeningGifs;
