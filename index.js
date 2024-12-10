const gifDurations = {
    opening1: 2000, // Duration in milliseconds
    opening2: 3900,
    beforebuttons: 2000,
    yes1: 2000,
    yes2: 2000,
    yes3: 2220,
    yes4: 2600,
    no1: 1920,
    no2: 2940,
};

function playGif(gifElement, gifName, onEnd) {
    gifElement.src = `${gifName}.gif`;
    gifElement.onload = () => {
        setTimeout(() => {
            gifElement.src = ""; // Clear GIF after it finishes
            if (onEnd) onEnd();
        }, gifDurations[gifName]);
    };
}

// Sequence for playing opening GIFs
playGif(gif, "opening1", () => {
    playGif(gif, "opening2", () => {
        showApologyText();
    });
});

function showApologyText() {
    question.innerText = "Will you forgive me?";
    setTimeout(() => {
        playGif(gif, "beforebuttons", () => {
            showButtons();
        });
    }, 2000);
}

function showButtons() {
    btnGroup.style.display = "flex";
    yesBtn.addEventListener("click", handleYesClick);
    noBtn.addEventListener("mouseover", handleNoHover);
}

function handleYesClick() {
    const yesGifs = ["yes1", "yes2", "yes3", "yes4"];
    playSequentialGifs(yesGifs, () => {
        question.innerText = "Thank you so much! ❤️";
    });
}

function handleNoHover() {
    const noGif = noBtn.dataset.played ? "no2" : "no1";
    noBtn.dataset.played = noGif === "no1" ? "yes" : "no";
    playGif(gif, noGif);
}

function playSequentialGifs(gifNames, onComplete) {
    if (gifNames.length === 0) {
        if (onComplete) onComplete();
        return;
    }
    const [currentGif, ...remainingGifs] = gifNames;
    playGif(gif, currentGif, () => {
        playSequentialGifs(remainingGifs, onComplete);
    });
}
