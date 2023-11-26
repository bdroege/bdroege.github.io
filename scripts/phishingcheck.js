function checkAnswerPH(button) {
    var buttons = document.querySelectorAll('.phishing-btn');
    var correctAnswerPH = button.getAttribute('data-correct') === 'true';

    if (correctAnswerPH) {
        markButtonAsCorrect(button);
    } else {
        markButtonAsIncorrect(button);
        setTimeout(resetButtonColor, 1500, button);
    }
}

function markButtonAsCorrect(button) {
    button.classList.add('incorrect');
    button.disabled = true;
}

function markButtonAsIncorrect(button) {
    button.classList.add('correct');
    button.disabled = true;
}

function resetButtonColor(button) {
    button.classList.remove('correct');
    button.disabled = false;
}
