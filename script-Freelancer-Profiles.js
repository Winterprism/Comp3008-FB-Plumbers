let rating = 0;

//function to set the review star colours
function rate(star) {
  rating = star;
  const stars = document.querySelectorAll('.ratingStar');
  stars.forEach((star, index) => {
    star.style.color = index < rating ? 'orange' : 'black';
  });
}


function addReview() {
  const reviewerName = document.getElementById("reviewerName").value;
  const reviewText = document.getElementById("newReview").value;
  if (reviewText && reviewerName && rating > 0) {

    //Create a list and add a review to it and append it to the reviewList text area
    const reviewList = document.getElementById("reviewList");
    const newReview = document.createElement("li");
    
    //Seperating the name and star rating from the review into 2 div elements
    const reviewNameRatingDiv = document.createElement("div");
    reviewNameRatingDiv.textContent = `Name: ${reviewerName}, Rating: ${rating} stars`;

    const reviewTextDiv = document.createElement("div");
    reviewTextDiv.textContent = `Review: ${reviewText}`;

    //adding the review to the page
    newReview.appendChild(reviewNameRatingDiv);
    newReview.appendChild(reviewTextDiv);
    reviewList.appendChild(newReview);

    // Clear the text area and reset the rating
    document.getElementById("reviewerName").value = '';
    document.getElementById("newReview").value = '';
    rate(0);

  } else {
    alert('Please write a review with your name and select a star rating.');
  }
}


function showContactInfo() {
  document.getElementById("contactInfoPopup").style.display = "block";
}

function closeContactInfo() {
  document.getElementById("contactInfoPopup").style.display = "none";
}


