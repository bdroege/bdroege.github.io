var hintsBlank = [
    'Look back at the beginning and the background of the OSI model',
    'In terms of the bits, what starts the handshake? What should the computer send',
    'How does the computer respond? What do they say back, [Answer/Answer]',
    'How does the computer acknowledge the successful agreement?'
];


function checkAnswer(questionId, questionIndexBlank) {
    var userAnswer = document.getElementById(questionId).querySelector('.fitb-blank');
    var resultElement = document.getElementById('result-' + questionId);
    var hintTextBlank = document.getElementById('hintTextBlank' + questionIndexBlank)

    // Replace this with the correct answer for each question
    var correctAnswer = userAnswer.getAttribute('data-answer').toLowerCase();

    if (userAnswer.value.toLowerCase() === correctAnswer) {
        userAnswer.style.backgroundColor = '#37ff0050'; // correct
        resultElement.textContent = 'Correct';
    } else {
        userAnswer.style.backgroundColor = '#ff00005a'; // incorrect
        resultElement.textContent = 'Incorrect';
        hintTextBlank.innerText = 'Hint: ' + hintsBlank[questionIndexBlank];

        setTimeout(function () {
            userAnswer.style.backgroundColor = '';
            userAnswer.textContent = '';
            resultElement.textContent = "Check Answer";
        }, 2000);
    }
}
