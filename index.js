const gifImage = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");
// Select the necessary elements
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gifImage = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Show the buttons immediately when the page loads (no delay)
const btnGroup = document.querySelector(".btn-group");
btnGroup.classList.remove("hidden"); // Make the buttons visible

// Event listener for Yes button
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay! Thank youuuuuuuuu >.<";
  gifImage.src = "yay.gif"; // Change to any desired gif after clicking Yes
});

// Event listener for No button
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;
  
  // Move the "No" button randomly within the window bounds
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Function to play opening gif
function playOpeningGif() {
  gifImage.src = "opening.gif";
  gifImage.addEventListener("load", () => {
    setTimeout(() => {
      gifImage.src = ""; // Remove the opening GIF after it plays
    }, 11800); // Duration of the combined GIF in milliseconds
  });
}

// Function to handle "Yes" response (to show more GIFs or messages)
function playYesGifs() {
  gifImage.src = "yes1.gif"; // Replace with your actual GIFs
  setTimeout(() => {
    gifImage.src = "yes2.gif";
  }, 2000); // Adjust timing based on GIF duration
}

// Function to handle "No" response (to show more GIFs or messages)
function playNoGifs() {
  gifImage.src = "no1.gif"; // Replace with your actual GIFs
  setTimeout(() => {
    gifImage.src = "no2.gif";
  }, 2000); // Adjust timing based on GIF duration
}

// Initialize the opening GIF when the page loads
playOpeningGif();

function playOpeningGif() {
  gifImage.src = "opening.gif"; // Set the gif source

  gifImage.addEventListener("load", () => {
    setTimeout(() => {
      showButtons(); // Show buttons after 12 seconds (12000ms)
    }, 12000); // Wait 12 seconds before showing buttons
  });
}

function showButtons() {
  btnGroup.classList.remove("hidden"); // Remove the "hidden" class to display the buttons
}
setTimeout(() => {
  showButtons(); // Call the function after 12 seconds
}, 12000);
  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");

  yesBtn.addEventListener("click", () => playYesGifs());
  noBtn.addEventListener("click", () => playNoGifs());
}

function playYesGifs() {
  // Logic for playing Yes GIFs
}

function playNoGifs() {
  // Logic for playing No GIFs
}

// Start by playing the opening GIF
playOpeningGif();
