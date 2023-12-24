function submitReview() {
    var username = document.getElementById('username').value;
    var review = document.getElementById('review').value;

    if (username && review) {
        var reviewContainer = document.getElementById('reviews-container');

        var reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        var userElement = document.createElement('p');
        userElement.textContent = 'User: ' + username;

        var reviewTextElement = document.createElement('p');
        reviewTextElement.textContent = 'Review: ' + review;

        reviewElement.appendChild(userElement);
        reviewElement.appendChild(reviewTextElement);

        reviewContainer.appendChild(reviewElement);

        // Clear form fields after submission
        document.getElementById('username').value = '';
        document.getElementById('review').value = '';
    } else {
        alert('Please enter both your name and review.');
    }
}
