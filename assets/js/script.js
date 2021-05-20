// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
var startButtonEl = document.querySelector(".start-button");
var questionContentEl = document.querySelector(".question-content");
var questionEl = document.querySelector("#question");
var timerEl = document.querySelector(".timer");
var anwserButton = document.querySelector(".button");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");

function init() {

}


function startGame() {
    startButtonEl.classList.add("hidden");
    questionContentEl.classList.add("hidden");
    questionEl.classList.remove("hidden");
    timer();

}

// function incorrect() {
//     if () {
//         timeLeft - 10;
//     }

// }



function timer() {
    var timeLeft = 60;
    timerEl.textContent = "Time: " + timeLeft;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}


function getScores() {

}

function setScores() {

}

startButtonEl.addEventListener("click", startGame);
