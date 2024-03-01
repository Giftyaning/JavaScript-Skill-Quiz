//Display quiz question when the Start quiz button is clicked
/*function beginQuiz() {
    var firstIntro = document.getElementById("first-intro");
    var quizQuestion = document.getElementById("quiz");

    firstIntro.style.display = "none";
    quizQuestion.style.display = "block";
    displayQuestion(currentQuestion);
}*/

//Const variables
const timer = document.getElementById("time");
const completedQuestion = document.getElementById("completed");
const remainingQuestion = document.getElementById("remaining");
const askedQuestions = document.getElementById("question");
const answerBtn = document.getElementById("answer");

//counter for current question and score
let currentQuestion = 0;
var score = 0;

//Questions
let questions = [
  {
    question: "What is the result of 5 + '5'? ",
    answers: [
        "10", 
        "5", 
        "55", 
        "20"
    ],
    correctIndex: 2,
  },
  {
    question: "What does the '===' operator do? ",
    answers: [
        "Assigns a value to a variable",
        "Checks if two variables are equal in value and type", 
        "Multiplies two numbers", 
        "Concatenates two strings"
    ],
    correctIndex: 1,
  },
  {
    question: "What is the syntax for declaring a variable? ",
    answers: [
        "var variable", 
        "variable variable", 
        "int variable", 
        "let variable"
    ],
    correctIndex: 3,
  },
  {
    question: "Which function is used to print content to the console? ",
    answers: [
        "console.log", 
        "print()", 
        "display()", 
        "log()"
    ],
    correctIndex: 0,
  },
  {
    question: "Which symbol is used for single-line comment? ",
    answers: [
        "//", 
        "!?", 
        "#", 
        "/* */"
    ],
    correctIndex: 0,
  },
];

//Function to display the questions
function displayQuestion(index) {
  var questionElement = document.getElementById("question");
  var answerButtons = document.getElementById("answer-buttons");

  //To display the question text
  questionElement.textContent = questions[index].question;

  //To remove any content from the answer buttons
  answerButtons.innerHTML = "";

  // Display answer buttons for the current question
  for (var i = 0; i < questions[index].answers.length; i++) {
    var button = document.createElement("button");
    button.textContent = questions[index].answers[i];
    button.classList.add("answer");
    button.onclick = function () {
      checkAnswer(i);
    };
    answerButtons.appendChild(button);
  }
}

// Function to check the selected answer
function checkAnswer(index) {
  // Increment score if the selected answer is correct
  if (index === questions[currentQuestion].correctIndex) {
    score++;
  }

  // Move to the next question or end the quiz
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion(currentQuestion);
  } else {
    endQuiz();
  }
}

// Function to end the quiz
function endQuiz() {
  // Display the score
  alert("Quiz completed! Your score is " + score);
}

//Timer function
let timeLeft = 60;

function beginQuiz() {
  setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      // Update the timer display
    } else {
      // End the quiz
    }
  }, 1000);
}