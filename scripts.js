document.addEventListener("DOMContentLoaded", function () {
    const rateSection = document.getElementById("rate");
    const thankyou = document.getElementById("thankyou");
    const ratingButtons = document.querySelectorAll(".star button");
    const submitButton = document.querySelector("input[type='submit']");
    const ratedText = document.getElementById("rated");

    let selectedRating = null;

    thankyou.style.display = "none";

    ratingButtons.forEach(button => {
        button.addEventListener("click", function () {
            ratingButtons.forEach(btn => btn.classList.remove("selected"));
            
            this.classList.add("selected");

            selectedRating = this.getAttribute("value"); 
        });
    });

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (selectedRating) {
            ratedText.textContent = selectedRating;
            rateSection.style.display = "none";
            thankyou.style.display = "flex";
        } else {
            alert("Please select a rating before submitting!");
        }
    });
});
