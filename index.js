document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    // Show the buttons immediately after the page loads
    const btnGroup = document.querySelector(".btn-group");
    btnGroup.style.display = "flex";  // Ensure buttons are visible

    // Event listener for "Yes" button
    yesBtn.addEventListener("click", () => {
        gif.src = "yes.gif";  // Change gif to "yes"
        question.innerHTML = "Yay! Thank youuuuuuuuu >.<";  // Update question
    });

    // Event listener for "No" button
    noBtn.addEventListener("click", () => {
        gif.src = "no.gif";  // Change gif to "no"
        question.innerHTML = "Oh no... Maybe next time.";  // Update question
    });
});
