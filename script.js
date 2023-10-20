'use strict';
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No value guessed');
  } else if (guess === secretNumber) {
    displayMessage('Correct Guess');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
  } else {
    score--;
    if (guess > secretNumber) {
      displayMessage('Too high');
    } else {
      displayMessage('Too low');
    }
    if (score <= 0) {
      displayMessage('You lose');
      document.querySelector('.score').textContent = '0';
    } else {
      document.querySelector('.score').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  console.log('Hello');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
