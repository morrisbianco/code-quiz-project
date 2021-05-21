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
var scoreList = document.querySelector("#score-list");
var card = document.querySelector(".card");

var timeLeft;
var timeInterval;
var stage;
var score = 0;

initials = [];


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
        ],
        correct: 1, 
    },
    {
        question: "What does DOM stand for?",
        answers: [
            "Document Obtuse Medal",
            "Document Oblique Model",
            "Document Object Mode",
            "Document Object Model",
        ],
        correct: 3,
    },
    {
        question: "Event.stopPropagation does what?",
        answers: [
            "Removes Children from Parent Div's",
            "Stops the code from refreshing the page",
            "Prevents Bubbling",
            "Registers where the user clicked",
        ],
        correct: 2,
    },
    {
        question: "What is the purpose of .trim()",
        answers: [
            "Removes excess whitespace from the input",
            "Deletes the last item in an array",
            "Removes the string value from numbers",
            "Removes the first item in an array",
        ],
        correct: 0,
    },
    {
        question: "What does API stand for?",
        answers: [
            "Application Programming Internet",
            "Application Programming Interface",
            "Application Programming Intercom",
            "Application Progressing Interface",
        ],
        correct: 1,
    },
    {
        question: "What HTML tag is used to link the Javascript code to the HTML document?",
        answers: [
            "Meta",
            "Link",
            "Script",
            "Title",
        ],
        correct: 2,
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
        var index = parseInt(element.dataset.index);
        if (index !== questions[stage].correct) {
            subtract();
        } 
    }

});

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

function highScore() {
    questionEl.classList.add("hidden");
    buttons.classList.add("hidden");
    highscore.classList.remove("hidden");
    input.classList.remove("hidden");
    card.classList.remove("hidden");
    clearInterval(timeInterval)
    score = timerEl.textContent
    setScores();
    scoreText.textContent = ("Your final score is " + score + ".");

}

function subtract() {
        timeLeft -= 10;
        timerEl.textContent = timeLeft;

        if (timeLeft < 0) {
            clearInterval(timeInterval);
            timerEl.textContent = 0;
            highScore();
        }

}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var inputText = scoreInput.value.trim();
    if (inputText === "") {
      return;
    }
    initials.push(inputText);
    scoreInput.value = "";

    localStorage.setItem("initials", JSON.stringify(inputText));
    
   getScores();
   renderScore();
    
  });

  function renderScore() {
      var li = document.createElement("li");
      li.textContent = "Highscore: " + JSON.parse(localStorage.getItem("initials")) + " - " + JSON.parse(localStorage.getItem("score"));
  
      scoreList.appendChild(li);
    
  }


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
console.log(JSON.parse(localStorage.getItem("score")));
console.log(JSON.parse(localStorage.getItem("initials")));
}



function setScores() {
    timerEl.textContent = score;
    localStorage.setItem("score", JSON.stringify(score));
    
}

startButtonEl.addEventListener("click", startGame);
