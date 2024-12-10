const gifSequence = [
    { id: "opening1", duration: 2000 },
    { id: "opening2", duration: 3900 },
    { id: "beforebuttons", duration: 2000 },
];
const yesSequence = ["yes1", "yes2", "yes3", "yes4"];
const noSequence = ["no1", "no2"];

const gifElement = document.getElementById("display-gif");
const apologyText = document.getElementById("apology-text");
const buttonContainer = document.getElementById("button-container");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

let noClickCount = 0;

// Helper to display a GIF
const displayGif = (id, duration) => {
    gifElement.src = `https://ikoden4556.github.io/sorry-putuli-/${id}.gif`;
    gifElement.classList.remove("hidden");
    return new Promise((resolve) => {
        setTimeout(() => {
            gifElement.classList.add("hidden");
            resolve();
        }, duration);
    });
};

// Play Opening Sequence
const playOpening = async () => {
    for (const gif of gifSequence) {
        await displayGif(gif.id, gif.duration);
    }
    apologyText.classList.remove("hidden");
    await displayGif("beforebuttons", 2000);
    buttonContainer.classList.remove("hidden");
};

// Yes Button Click Handler
yesButton.addEventListener("click", async () => {
    buttonContainer.classList.add("hidden");
    for (const id of yesSequence) {
        await displayGif(id, 2000);
    }
    apologyText.innerText = "Thank you! ❤️";
});

// No Button Click Handler
noButton.addEventListener("click", async () => {
    buttonContainer.classList.add("hidden");
    const id = noSequence[noClickCount % 2];
    await displayGif(id, id === "no1" ? 1920 : 2940);
    noClickCount++;
    buttonContainer.classList.remove("hidden");
});

// Start the sequence on page load
window.addEventListener("DOMContentLoaded", playOpening);
