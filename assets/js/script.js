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

var timer;
var timeLeft;

function init() {

}


function startGame() {
    startButtonEl.classList.add("hidden");
    questionContentEl.classList.add("hidden");
    questionEl.classList.remove("hidden");
    buttons.classList.remove("hidden");
    timer();
    nextQuestion();
}

function nextQuestion() {
    answer1.addEventListener("click", function () {
        if (answer1.classList.contains("correct")) {
            question2();
        } else {
            subtract();
            question2();
        }
    })
    answer2.addEventListener("click", function () {
        if (answer2.classList.contains("correct")) {
            question2();
        } else {
            subtract();
            question2();
        }
    })
    answer3.addEventListener("click", function () {
        if (answer3.classList.contains("correct")) {
            question2();
        } else {
            subtract();
            question2();
        }
    })
    answer4.addEventListener("click", function () {
        if (answer4.classList.contains("correct")) {
            question2();
        } else {
            subtract();
            question2();
        }
    })
}

function question2() {
    questionEl.textContent = "heelo";
    answer1.textContent = "asf";
    answer2.textContent = "asf";
    answer3.textContent = "asf";
    answer4.textContent = "asf";

    answer2.classList.remove("correct");
    answer4.classList.add("correct");

    answer1.addEventListener("click", function () {
        if (answer1.classList.contains("correct")) {
            question3();
        } else {
            subtract();
            question3();
        }
    })
    answer2.addEventListener("click", function () {
        if (answer2.classList.contains("correct")) {
            question3();
        } else {
            subtract();
            question3();
        }
    })
    answer3.addEventListener("click", function () {
        if (answer3.classList.contains("correct")) {
            question3();
        } else {
            subtract();
            question3();
        }
    })
    answer4.addEventListener("click", function () {
        if (answer4.classList.contains("correct")) {
            question3();
        } else {
            subtract();
            question3();
        }
    })
}

function question3() {
    questionEl.textContent = "heelo";
    answer1.textContent = "asf";
    answer2.textContent = "a2";
    answer3.textContent = "asf";
    answer4.textContent = "asf";

    answer1.addEventListener("click", function () {
        if (answer1.classList.contains("correct")) {
            question4();
        } else {
            subtract();
            question4();
        }
    })
    answer2.addEventListener("click", function () {
        if (answer2.classList.contains("correct")) {
            question4();
        } else {
            subtract();
            question4();
        }
    })
    answer3.addEventListener("click", function () {
        if (answer3.classList.contains("correct")) {
            question4();
        } else {
            subtract();
            question4();
        }
    })
    answer4.addEventListener("click", function () {
        if (answer4.classList.contains("correct")) {
            question4();
        } else {
            subtract();
            question4();
        }
    })
}

function question4() {
    questionEl.textContent = "heelo";
    answer1.textContent = "asf";
    answer2.textContent = "a2";
    answer3.textContent = "a3";
    answer4.textContent = "asf";

    answer4.classList.remove("correct");
    answer3.classList.add("correct");

    answer1.addEventListener("click", function () {
        if (answer1.classList.contains("correct")) {
            question5();
        } else {
            subtract();
            question5();
        }
    })
    answer2.addEventListener("click", function () {
        if (answer2.classList.contains("correct")) {
            question5();
        } else {
            subtract();
            question5();
        }
    })
    answer3.addEventListener("click", function () {
        if (answer3.classList.contains("correct")) {
            question5();
        } else {
            subtract();
            question5();
        }
    })
    answer4.addEventListener("click", function () {
        if (answer4.classList.contains("correct")) {
            question5();
        } else {
            subtract();
            question5();
        }
    })
}

function question5() {
    questionEl.textContent = "heelo";
    answer1.textContent = "asf";
    answer2.textContent = "a2";
    answer3.textContent = "a3";
    answer4.textContent = "a4";

    answer3.classList.remove("correct");
    answer1.classList.add("correct");

    answer1.addEventListener("click", function () {
        if (answer1.classList.contains("correct")) {
            question6();
        } else {
            subtract();
            question6();
        }
    })
    answer2.addEventListener("click", function () {
        if (answer2.classList.contains("correct")) {
            question6();
        } else {
            subtract();
            question6();
        }
    })
    answer3.addEventListener("click", function () {
        if (answer3.classList.contains("correct")) {
            question6();
        } else {
            subtract();
            question6();
        }
    })
    answer4.addEventListener("click", function () {
        if (answer4.classList.contains("correct")) {
            question6();
        } else {
            subtract();
            question6();
        }
    })
}

function question6() {
    questionEl.textContent = "heelo";
    answer1.textContent = "a1";
    answer2.textContent = "a2";
    answer3.textContent = "a3";
    answer4.textContent = "a4";

    answer1.classList.remove("correct");
    answer2.classList.add("correct");

    answer1.addEventListener("click", function () {
        if (answer1.classList.contains("correct")) {
            highScore();
        } else {
            subtract();
            highScore();
        }
    })
    answer2.addEventListener("click", function () {
        if (answer2.classList.contains("correct")) {
            highScore();
        } else {
            subtract();
            highScore();
        }
    })
    answer3.addEventListener("click", function () {
        if (answer3.classList.contains("correct")) {
            highScore();
        } else {
            subtract();
            highScore();
        }
    })
    answer4.addEventListener("click", function () {
        if (answer4.classList.contains("correct")) {
            highScore();
        } else {
            subtract();
            highScore();
        }
    })
}

function highScore() {
    questionEl.classList.add("hidden");
    buttons.classList.add("hidden");
    highscore.classList.remove("hidden");
    input.classList.remove("hidden");
}

function subtract() {
    timeLeft - 10;
}


function timer() {
    var timeLeft = 60;
    timerEl.textContent = "Time: " + timeLeft;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            highScore();
        }
        return timeLeft;
    }, 1000);
}


function getScores() {

}

function setScores() {

}

startButtonEl.addEventListener("click", startGame);
