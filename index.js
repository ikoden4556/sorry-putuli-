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
    moveNoButton(); // Move the "No" button to a random position
});

// Function to move the "No" button to a random position
function moveNoButton() {
    // Get the dimensions of the "No" button and window
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    // Calculate random positions within the window
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Set the new position for the "No" button
    noBtn.style.position = "absolute"; // Make it movable
    noBtn.style.left = randomX + "px"; // Random horizontal position
    noBtn.style.top = randomY + "px"; // Random vertical position
}
