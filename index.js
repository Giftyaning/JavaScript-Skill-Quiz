// Get DOM elements
const startBtn = document.getElementById("startBtn");
const nameInput = document.getElementById("name");
const startPage = document.getElementById("start-page");
const quiz = document.getElementById("quizWrap");
const timer = document.getElementById("timer");
const choicesContainer = document.querySelector(".choices");
const nextBtn = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const playAgainBtn = document.getElementById("playAgainBtn");
const questionElement = document.getElementById("question");
const scoreDisplay = document.getElementById("score");

// Initialize variables
let currentQuestionIndex = 0;
let countdownInterval;
let score = 0;

// Event listeners
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", handleNext);
playAgainBtn.addEventListener("click", restartQuiz);

// Styling
startBtn.style.color = "green";
nextBtn.style.display = "none";

// Start Quiz Function
function startQuiz() {
  startPage.style.display = "none";
  quiz.style.display = "block";
  loadQuestion();
}

// Countdown Timer Function
function startCountdown() {
  let seconds = 60;
  timer.textContent = `Time left: ${seconds}s`;

  countdownInterval = setInterval(() => {
    seconds--;

    if (seconds < 0) {
      clearInterval(countdownInterval);
      handleNext();
    } else {
      timer.textContent = `Time left: ${seconds}s`;
    }
  }, 1000);
}

// Load Questions Function
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  choicesContainer.innerHTML = "";
  feedback.textContent = "";

  currentQuestion.answers.forEach((answer) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = answer;
    choiceButton.classList.add("choice-btn");
    choiceButton.addEventListener("click", () => {
      selectAnswer(answer);
      feedback.style.display = "block"; 
    });
    choicesContainer.appendChild(choiceButton);
  });

  clearInterval(countdownInterval);
  startCountdown();

  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.textContent = "End Quiz";
  } else {
    nextBtn.textContent = "Next";
  }
}

// Handle Next Button Function
function handleNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none"; // Hide the next button after showing the next question
  } else {
    endQuiz();
  }
}

// Selected Answers Function
function selectAnswer(answer) {
  clearInterval(countdownInterval);

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = answer === currentQuestion.correctAnswer;

  if (isCorrect) {
    score++;
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Wrong! The correct answer is: ${currentQuestion.correctAnswer}`;
    feedback.style.color = "red";
  }

  const choiceButtons = document.querySelectorAll(".choice-btn");
  choiceButtons.forEach((button) => {
    button.classList.remove("selected");
    button.disabled = true;
  });

  nextBtn.style.display = "block"; // Show the next button after an answer is selected
}

// End Quiz Function
function endQuiz() {
  clearInterval(countdownInterval);

  quiz.style.display = "none";
  feedback.style.display = "block";

  const totalQuestions = questions.length;
  const feedbackMessage = `You scored ${score} out of ${totalQuestions} questions.`;
  feedback.textContent = feedbackMessage;

  nextBtn.textContent = "Play Again";
  nextBtn.removeEventListener("click", handleNext);
  nextBtn.addEventListener("click", restartQuiz);

  nextBtn.style.display = "block";
  nextBtn.disabled = false;
}



// Restart Quiz Function
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  feedback.style.display = "none";
  nextBtn.removeEventListener("click", restartQuiz);
  nextBtn.addEventListener("click", handleNext);

  const choiceButtons = document.querySelectorAll(".choice-btn");
  choiceButtons.forEach((button) => {
    button.classList.remove("selected");
    button.disabled = false;
  });

  startQuiz();
}

// Quiz Questions
const questions = [
  {
    question: "What is the result of 5 + '5'?",
    answers: ["10", "5", "55", "20"],
    correctAnswer: "55",
  },
  {
    question: "What does the '===' operator do?",
    answers: [
      "Assigns a value to a variable",
      "Checks if two variables are equal in value and type",
      "Multiplies two numbers",
      "Concatenates two strings",
    ],
    correctAnswer: "Checks if two variables are equal in value and type",
  },
  {
    question: "What is the syntax for declaring a variable?",
    answers: [
      "var variable",
      "variable variable",
      "int variable",
      "let variable",
    ],
    correctAnswer: "let variable",
  },
  {
    question: "Which function is used to print content to the console?",
    answers: ["console.log", "print()", "display()", "log()"],
    correctAnswer: "console.log",
  },
  {
    question: "Which symbol is used for single-line comment?",
    answers: ["//", "!?", "#", "/* */"],
    correctAnswer: "//",
  },
  {
    question: "What is the purpose of the `addEventlistener()` method?",
    answers: [
      "Creates a new event",
      "Defines a custom event",
      "Removes an event handler",
      "Attaches an event handler to the specified element",
    ],
    correctAnswer: "Attaches an event handler to the specified element",
  },
  {
    question: "What is the result of `typeof null`?",
    answers: [
      "object",
      "null",
      "undefined",
      "number",
    ],
    correctAnswer: "object",
  }
];
