const gifImage = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");

function playOpeningGif() {
  gifImage.src = "opening.gif"; // Set the gif source

  gifImage.addEventListener("load", () => {
    setTimeout(() => {
      showButtons(); // Show buttons after 12 seconds (12000ms)
    }, 12000); // Wait 12 seconds before showing buttons
  });
}

function showButtons() {
  btnGroup.classList.remove("hidden"); // Show buttons after the delay
  btnGroup.style.display = 'flex'; // Ensure buttons are shown in the flexbox layout

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
