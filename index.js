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
        console.log(`Playing opening GIF: ${openingGifs[openingIndex]}`);
        gif.src = openingGifs[openingIndex];
        const delay = openingIndex === 0 ? 2000 : 14000; // Adjust for each GIF duration
        openingIndex++;
        setTimeout(playOpeningGifs, delay); // Move to the next GIF after its duration
    } else {
        console.log("Finished opening GIFs. Playing 'before buttons' GIF...");
        gif.src = "beforebuttons.gif"; // Play the "before buttons" GIF
        setTimeout(showApologyText, 2000); // Show text after delay
    }
}

// Show apology text
function showApologyText() {
    gif.classList.add("hidden");  // Hide gif
    apologyText.classList.remove("hidden");  // Show apology text
    setTimeout(showButtons, 2000); // Show buttons after delay
}

// Show buttons
function showButtons() {
    apologyText.classList.add("hidden");  // Hide apology text
    gif.classList.remove("hidden");  // Show gif area again
    buttonGroup.classList.remove("hidden"); // Show buttons
}

// Yes button click
yesBtn.addEventListener("click", () => {
    if (yesIndex < yesGifs.length) {
        gif.src = yesGifs[yesIndex];  // Play next "Yes" gif
        yesIndex++;
    } else {
        gif.src = "yes1.gif";  // Restart or show final GIF if desired
    }
});

// No button click
noBtn.addEventListener("click", () => {
    gif.src = noGifs[noIndex];  // Play first or second "No" gif
    noIndex = (noIndex + 1) % noGifs.length;  // Alternate between the two GIFs
});

// Start the opening GIFs on page load
window.onload = playOpeningGifs;
