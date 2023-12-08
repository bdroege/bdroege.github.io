var hints = [
    'Are you sure? Look at the dates of each model again!',
    'Think about it, what is the purpose of the three-way handshake',
    'What\'s currently being implemented in our modern day networks?',
    'Think of the End User as the one receiving the data and information',
    'Think about it, what is the purpose of the three-way handshake',
    'Tea!',
    'Bob',
    'oh wow',
    'okay',
    'last one'
];

function checkAnswerTF(button, questionIndex) {
    var buttons = document.querySelectorAll('.btn');
    var correctAnswerTF = button.getAttribute('data-correct') === 'true';

    var hintText = document.getElementById('hintText' + questionIndex);

    if (correctAnswerTF) {
        markButtonAsCorrect(button);
    } else {
        markButtonAsIncorrect(button);
        hintText.innerText = "Hint: " + hints[questionIndex];
        setTimeout(resetButtonColor, 1500, button);
    }
}

function markButtonAsCorrect(button) {
    button.classList.add('correct');
    button.disabled = true;
}

function markButtonAsIncorrect(button) {
    button.classList.add('incorrect');
    button.disabled = true;
}

function resetButtonColor(button) {
    button.classList.remove('incorrect');
    button.disabled = false;
}
