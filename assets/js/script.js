// GIVEN I am taking a code quiz DONE
// WHEN I click the start button DONE
// THEN a timer starts and I am presented with a question DONE
// WHEN I answer a question DONE
// THEN I am presented with another question DONE 
// WHEN I answer a question incorrectly 
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0 DONE
// THEN the game is over DONE
// WHEN the game is over DONE
// THEN I can save my initials and my score
var startButtonEl = document.querySelector(".start-button");
var questionContentEl = document.querySelector(".question-content");
var questionEl = document.querySelector("#question");
var timerEl = document.querySelector(".timer");
var answerButton = document.querySelector(".button");
var buttons = document.querySelector(".buttons")
var highscore = document.querySelector(".highscore");
var input = document.querySelector(".inputControl");
var scoreText = document.querySelector("#scoreText");
var scoreInput = document.querySelector("#input");
var submitButton = document.querySelector(".submitButton");

var timeLeft;
var timeInterval;
var stage;
var score = 0;

initials = [];

function init() {
getScores();
}


function startGame() {
    startButtonEl.classList.add("hidden");
    questionContentEl.classList.add("hidden");
    stage = 0;
    timer();
    firstQuestion();
    
}

var questions = [
    {
        question: "What method is used to create a copy of some or all of the values within an array?",
        answers: [
            "Slice",
            "Splice",
            "Space",
            "Spike",
        ]
    },
    {
        question: "What does DOM stand for?",
        answers: [
            "Document Obtuse Medal",
            "Document Oblique Model",
            "Document Object Mode",
            "Document Object Model",
        ]
    },
    {
        question: "Event.stopPropagation does what?",
        answers: [
            "Removes Children from Parent Div's",
            "Stops the code from refreshing the page",
            "Prevents Bubbling",
            "Registers where the user clicked",
        ]
    },
    {
        question: "What is the purpose of .trim()",
        answers: [
            "Removes excess whitespace from the input",
            "Deletes the last item in an array",
            "Removes the string value from numbers",
            "Removes the first item in an array",
        ]
    },
    {
        question: "What does API stand for?",
        answers: [
            "Application Programming Internet",
            "Application Programming Interface",
            "Application Programming Intercom",
            "Application Progressing Interface",
        ]
    },
    {
        question: "What HTML tag is used to link the Javascript code to the HTML document?",
        answers: [
            "Meta",
            "Link",
            "Script",
            "Title",
        ]
    },
]

function firstQuestion() {
    while (buttons.firstChild) {
        buttons.removeChild(buttons.firstChild);
    }
    showQuestion();
}

function showQuestion() {
    questionEl.textContent = questions[stage].question;
    
    for (var i = 0; i < questions[stage].answers.length; i++) {
        var answer = questions[stage].answers[i];
        var buttonEl = document.createElement("button");
        buttonEl.textContent = answer;
        buttonEl.setAttribute("class", "button");
        buttonEl.setAttribute("data-index", i);
        buttons.appendChild(buttonEl);
    
    }
    
    
}

buttons.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button")) {
        if (stage === questions.length - 1) {
            highScore();
        } else if (stage < questions.length) {
            stage++;
            firstQuestion();
        } 
    }
    
});

function checkCorrect () {
    
}

// buttons.addEventListener("click", function(event) {
//     var element = event.target;
//     if (element.matches("button")) {
//         var index = parseInt(element.dataset.index);
//         console.log(index, question.correct);
//         if (element.matches("incorrect")) {

//         }
//     }
// })

function highScore() {
    questionEl.classList.add("hidden");
    buttons.classList.add("hidden");
    highscore.classList.remove("hidden");
    input.classList.remove("hidden");
    clearInterval(timeInterval)
    score = timerEl.textContent
    setScores();
    scoreText.textContent = ("Your final score is " + score + ".");

}

function subtract() {
        timeLeft -= 10;
        timerEl.textContent = timeLeft;

        // if (timeLeft < 0) {
        //     clearInterval(timeInterval);
        //     timerEl.textContent = "Time: " + 0;
        //     highScore();
        // }

}

submitButton.addEventListener("submit", function(event) {
    event.preventDefault();
    var inputText = scoreInput.value.trim();
    if (inputText === "") {
      return;
    }
    initials.push(inputText);
    scoreInput.value = "";

    console.log(inputText);
   
    // TODO: What will happen when the following functions are called?
    // The storeTodos stores the todos in the local storage
    // the renderTodos writes them out on page
    // storeTodos();
    // renderTodos();
  });


function timer() {
    timeLeft = 60;
    timerEl.textContent = timeLeft;
    timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            highScore();
        }

    }, 1000);
}


function getScores() {

}

function setScores() {
    timerEl.textContent = score;
    localStorage.setItem("score", JSON.stringify(score));
}

startButtonEl.addEventListener("click", startGame);
