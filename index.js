const wrapper = document.querySelector(".wrapper");
const gifImage = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");

function playOpeningGif() {
  gifImage.src = "opening.gif"; // Update the gif source

  gifImage.addEventListener("load", () => {
    setTimeout(() => {
      gifImage.classList.add("hidden"); // Hide the GIF after it plays
      showButtons(); // Show the buttons after the GIF
    }, 11800); // Duration of the combined GIF in milliseconds
  });
}

function showButtons() {
  btnGroup.classList.remove("hidden"); // Make buttons visible

  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");

  yesBtn.addEventListener("click", () => playYesGifs());
  noBtn.addEventListener("click", () => playNoGifs());
}

function playYesGifs() {
  // Logic to play Yes GIFs
}

function playNoGifs() {
  // Logic to play No GIFs
}

// Start by playing the opening GIF
playOpeningGif();
