const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Event listener for "Yes" button
yesBtn.addEventListener("click", () => {
    gif.src = "yes.gif"; // Change gif to "yes" when user clicks Yes
    question.innerHTML = "Yay! Thank youuuuuuuuu >.<"; // Update question
});

// Event listener for "No" button
noBtn.addEventListener("click", () => {
    gif.src = "no.gif"; // Change gif to "no" when user clicks No
    question.innerHTML = "Oh no... Maybe next time."; // Update question
    moveNoButton(); // Move the "No" button to a random position every time it's clicked
});

// Function to move the "No" button to a random position
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth; // Max X position for the button
    const maxY = window.innerHeight - noBtn.offsetHeight; // Max Y position for the button

    // Calculate random positions within the window
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Set the new position for the "No" button
    noBtn.style.position = "absolute"; // Ensure the button is positioned absolutely
    noBtn.style.left = randomX + "px"; // Set random left position
    noBtn.style.top = randomY + "px"; // Set random top position
}
