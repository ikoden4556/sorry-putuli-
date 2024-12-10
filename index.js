const gifContainer = document.querySelector(".gif-container");
const gifImage = document.querySelector(".gif");

function playOpeningGif() {
  gifImage.src = "opening.gif";
  gifImage.addEventListener("load", () => {
    setTimeout(() => {
      gifContainer.innerHTML = ""; // Remove the opening GIF after it plays
      showButtons();
    }, 11800); // Duration of the combined GIF in milliseconds
  });
}

function showButtons() {
  const question = document.createElement("h2");
  question.textContent = "Will you forgive me?";
  question.className = "question";

  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";

  const yesBtn = document.createElement("button");
  yesBtn.className = "yes-btn";
  yesBtn.textContent = "Yes!";
  yesBtn.addEventListener("click", () => playYesGifs());

  const noBtn = document.createElement("button");
  noBtn.className = "no-btn";
  noBtn.textContent = "No!";
  noBtn.addEventListener("click", () => playNoGifs());

  btnGroup.appendChild(yesBtn);
  btnGroup.appendChild(noBtn);

  gifContainer.appendChild(question);
  gifContainer.appendChild(btnGroup);
}

function playYesGifs() {
  // Add logic to play the sequential Yes GIFs
}

function playNoGifs() {
  // Add logic to play the No GIFs alternately
}

// Start by playing the opening GIF
playOpeningGif();
