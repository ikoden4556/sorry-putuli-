const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Function to play opening gif
function playOpeningGif() {
    gif.src = "opening.gif";
    gif.addEventListener("load", () => {
        setTimeout(() => {
            showButtons(); // Show buttons after the gif finishes
        }, 11800); // Duration of the combined opening gif (11.8 seconds)
    });
}

// Function to show the buttons after opening gif finishes
function showButtons() {
    const btnGroup = document.querySelector(".btn-group");
    btnGroup.style.display = "flex"; // Show buttons after gif finishes
}

// Event listener for "Yes" button
yesBtn.addEventListener("click", () => {
    gif.src = "yes.gif"; // Change gif to "yes" when user clicks Yes
    question.innerHTML = "Yay! Thank youuuuuuuuu >.<"; // Update question
});

// Event listener for "No" button
noBtn.addEventListener("click", () => {
    gif.src = "no.gif"; // Change gif to "no" when user clicks No
    question.innerHTML = "Oh no... Maybe next time."; // Update question
});

// Start by playing the opening gif
playOpeningGif();
