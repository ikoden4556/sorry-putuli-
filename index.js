document.addEventListener("DOMContentLoaded", () => {
    const gifDisplay = document.getElementById("gif-display");
    const apologyText = document.getElementById("apology-text");
    const btnContainer = document.getElementById("btn-container");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    const gifs = {
        opening: ["opening1.gif", "opening2.gif"],
        beforeButtons: "beforebuttons.gif",
        yes: ["yes1.gif", "yes2.gif", "yes3.gif", "yes4.gif"],
        no: ["no1.gif", "no2.gif"]
    };

    let noClickCount = 0;

    const playGif = (src, callback) => {
        gifDisplay.src = `https://ikoden4556.github.io/sorry-putuli-/${src}`;
        gifDisplay.style.display = "block";
        gifDisplay.onload = () => {
            setTimeout(() => {
                gifDisplay.style.display = "none";
                if (callback) callback();
            }, gifDisplay.naturalHeight * 10); // Adjust timeout based on GIF length
        };
    };

    const startSequence = () => {
        playGif(gifs.opening[0], () => {
            playGif(gifs.opening[1], () => {
                apologyText.classList.remove("hidden");
                setTimeout(() => {
                    playGif(gifs.beforeButtons, () => {
                        btnContainer.classList.remove("hidden");
                    });
                }, 1000);
            });
        });
    };

    yesBtn.addEventListener("click", () => {
        btnContainer.classList.add("hidden");
        let gifIndex = 0;
        const playYesGifs = () => {
            if (gifIndex < gifs.yes.length) {
                playGif(gifs.yes[gifIndex], () => {
                    gifIndex++;
                    playYesGifs();
                });
            }
        };
        playYesGifs();
    });

    noBtn.addEventListener("click", () => {
        playGif(gifs.no[noClickCount % 2]);
        noClickCount++;
    });

    startSequence();
});
