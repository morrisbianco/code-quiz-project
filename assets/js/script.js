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
var answerButton = document.querySelector(".button");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var buttons = document.querySelector(".buttons")
var highscore = document.querySelector(".highscore");
var input = document.querySelector(".inputControl");


function init() {

}


function startGame() {
    startButtonEl.classList.add("hidden");
    questionContentEl.classList.add("hidden");
    questionEl.classList.remove("hidden");
    buttons.classList.remove("hidden");
    timer();

}

answerButton.addEventListener("click", function question2() {
    questionEl.textContent = "heelo";
    answer1.textContent = "asf";
    answer2.textContent = "asf";
    answer3.textContent = "asf";
    answer4.textContent = "asf";

    answerButton.addEventListener("click", function question3() {
        questionEl.textContent = "heelo";
        answer1.textContent = "asf";
        answer2.textContent = "a2";
        answer3.textContent = "asf";
        answer4.textContent = "asf";

        answerButton.addEventListener("click", function question4() {
            questionEl.textContent = "heelo";
            answer1.textContent = "asf";
            answer2.textContent = "a2";
            answer3.textContent = "a3";
            answer4.textContent = "asf";

            answerButton.addEventListener("click", function question5() {
                questionEl.textContent = "heelo";
                answer1.textContent = "asf";
                answer2.textContent = "a2";
                answer3.textContent = "a3";
                answer4.textContent = "a4";

                answerButton.addEventListener("click", function question6() {
                    questionEl.textContent = "heelo";
                    answer1.textContent = "a1";
                    answer2.textContent = "a2";
                    answer3.textContent = "a3";
                    answer4.textContent = "a4";

                    answerButton.addEventListener("click", function highScore() {
                        questionEl.classList.add("hidden");
                        buttons.classList.add("hidden");
                        highscore.classList.remove("hidden");
                        input.classList.remove("hidden");
                        
                        
                    });
                });
            });
        });
    });
});

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
