"use strict";

const hiddenNumber = document.querySelector(".secret-number");
const gameMessage = document.querySelector(".message");
const numberGuesses = document.querySelector(".guesses");
const highscore = document.querySelector(".highscore");

let secretNumber = 0;

function generateNumber() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
}
generateNumber();

let guessCounter = 0;
let highscoreCounter = 20;

document.querySelector(".guess").addEventListener("click", function () {
  let guess = document.querySelector(".guess-input").value;
  if (!guess) {
    gameMessage.style.color = "var(--pink)";
    gameMessage.textContent = "Type a Number please!";
  } else if (Number(guess) > secretNumber) {
    gameMessage.style.color = "#000000";
    gameMessage.textContent = "Your guess is too High.";
    guessCounter++;
    numberGuesses.textContent = guessCounter;
    highscoreCounter--;
    highscore.textContent = highscoreCounter;
  } else if (Number(guess) < secretNumber) {
    gameMessage.style.color = "#000000";
    gameMessage.textContent = "Your guess is too Low.";
    guessCounter++;
    numberGuesses.textContent = guessCounter;
    highscoreCounter--;
    highscore.textContent = highscoreCounter;
  } else if (Number(guess) === secretNumber) {
    hiddenNumber.textContent = secretNumber;
    gameMessage.style.color = "var(--teal)";
    gameMessage.textContent = "You are Correct!";
    this.disabled = true;
  }
});

document.querySelector(".restart").addEventListener("click", function () {
  hiddenNumber.textContent = "?";
  gameMessage.style.color = "#000000";
  gameMessage.textContent = "Start Guessing ...";
  document.querySelector(".guess-input").value = "";
  guessCounter = 0;
  highscoreCounter = 20;
  numberGuesses.textContent = guessCounter;
  highscore.textContent = highscoreCounter;
  generateNumber();
  document.querySelector(".guess").disabled = false;
});

document.querySelector(".giveup").addEventListener("click", function () {
  hiddenNumber.textContent = secretNumber;
  gameMessage.style.color = "var(--pink)";
  gameMessage.textContent = `Given up ... Number was ${secretNumber}`;
  document.querySelector(".guess").disabled = true;
});
