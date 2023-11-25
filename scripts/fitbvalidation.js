function checkAnswer(questionId) {
    var userAnswer = document.getElementById(questionId).querySelector('.fitb-blank');
    var resultElement = document.getElementById('result-' + questionId);

    // Replace this with the correct answer for each question
    var correctAnswer = userAnswer.getAttribute('data-answer').toLowerCase();

    if (userAnswer.value.toLowerCase() === correctAnswer) {
        userAnswer.style.backgroundColor = '#37ff0050'; // Green for correct
        resultElement.textContent = 'Correct';
    } else {
        userAnswer.style.backgroundColor = '#ff00005a'; // Red for incorrect
        resultElement.textContent = 'Incorrect';

        setTimeout(function () {
            userAnswer.style.backgroundColor = '';
            userAnswer.textContent = '';
            resultElement.textContent = "Check Answer";
        }, 2000);
    }
}
