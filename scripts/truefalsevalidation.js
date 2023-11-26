function checkAnswerTF(button) {
    var buttons = document.querySelectorAll('.btn');
    var correctAnswerTF = button.getAttribute('data-correct') === 'true';

    if (correctAnswerTF) {
        markButtonAsCorrect(button);
    } else {
        markButtonAsIncorrect(button);
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
