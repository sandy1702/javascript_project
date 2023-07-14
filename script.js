'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    let inp = Number(document.querySelector('.guess').value);
    //console.log(inp);
    if (!inp) {

        displayMessage('Blank ❓❓❓');
    }
    else if (!score) {
        displayMessage('You have lost 💀💀💀');
        document.querySelector('body').style.backgroundColor = '#B31212';
    }
    else if (secretNumber === inp) {
        displayMessage('You have won 🎉🎉🎉')
        document.querySelector('body').style.backgroundColor = '#8BD15A';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (highscore < score) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
    }
    else {
        score--;
        document.querySelector('.score').textContent = score;


        if (inp > secretNumber) {
            displayMessage('too high 📈');

        }
        else if (inp < secretNumber) {
            displayMessage('too low 📉');
        }

    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector('.number').textContent = '?';
})