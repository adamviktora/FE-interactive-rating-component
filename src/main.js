let rating = 0;

let ratingButtons = document.querySelectorAll(".rating-button");
ratingButtons.forEach((button) => (button.onclick = clickRating));

function clickRating(event) {
  ratingButtons.forEach((button) =>
    button.classList.remove("rating-button--clicked")
  );
  rating = Number(event.target.innerHTML);
  console.log(rating);
  event.target.classList.add("rating-button--clicked");
}

document.querySelector(".submit-button").onclick = clickSubmit;

function clickSubmit() {
  if (rating !== 0) {
    document
      .getElementById("state-rating")
      .classList.add("container--not-showing");
    document
      .getElementById("state-thank-you")
      .classList.remove("container--not-showing");
    document.getElementById("selected-rating").innerText = rating;
  }
}
