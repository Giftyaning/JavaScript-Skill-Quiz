const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const feedback = document.getElementById("feedback"); // Add feedback element

// Quiz Questions and Choices
const quizData = [
  {
    question: "What is the result of 5 + '5'? ",
    choices: ["10", "5", "55", "20"],
    answer: "55",
  },
  {
    question: "What does the '===' operator do? ",
    choices: [
      "Assigns a value to a variable",
      "Checks if two variables are equal in value and type",
      "Multiplies two numbers",
      "Concatenates two strings",
    ],
    answer: "Checks if two variables are equal in value and type",
  },
  {
    question: "What is the syntax for declaring a variable? ",
    choices: [
      "var variable",
      "variable variable",
      "int variable",
      "let variable",
    ],
    answer: "let variable",
  },
  {
    question: "Which function is used to print content to the console? ",
    choices: ["console.log", "print()", "display()", "log()"],
    answer: "console.log",
  },
  {
    question: "Which symbol is used for single-line comment? ",
    choices: ["//", "!?", "#", "/* */"],
    answer: "//",
  },
];

//Question number and score
let currentQuestionIndex = 0;
let score = 0;

//To start the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

//To show questions
function showQuestion() {
  let currentQuestion = quizData[currentQuestionIndex];
  let questionNu = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNu + ". " + currentQuestion.question;

  answersContainer.innerHTML = "";

  //To display the answer option
  currentQuestion.choices.forEach((choice, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.classList.add("answer-btn");
    choiceButton.textContent = choice;
    answersContainer.appendChild(choiceButton);
    choiceButton.addEventListener("click", (event) =>
      selectAnswer(event, index)
    );
    if (quizData[currentQuestionIndex].answer === choice) {
      choiceButton.dataset.answer = "correct";
    }
  });
}

function selectAnswer(event, index) {
  const selectedChoice = event.target;
  const selectedAnswer = selectedChoice.innerHTML;

  if (selectedAnswer === quizData[currentQuestionIndex].choices[index]) {
    score += 1;
    feedback.innerHTML = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.innerHTML = "Wrong!";
    feedback.style.color = "red";
  }
}

startQuiz();
