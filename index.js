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
  });

  feedback.innerHTML = "";
}

function selectAnswer(event, index) {
  const selectedChoice = event.target;
  const selectedAnswer = selectedChoice.textContent; 
  const currentQuestion = quizData[currentQuestionIndex]; 

  if (selectedAnswer === currentQuestion.answer) {
    score += 1;
    feedback.innerHTML = "Correct!";
    feedback.style.color = "green";
    selectedChoice.classList.add("correct-answer");
  } else {
    feedback.innerHTML =
      "Wrong! The correct answer is: " + currentQuestion.answer;
    feedback.style.color = "red";
    selectedChoice.classList.add("wrong-answer");
  }

  //To disable the buttons when an answer is selected
  const choiceButtons = answersContainer.querySelectorAll(".answer-btn");
  choiceButtons.forEach((button) => {
    button.disabled = true;
    nextButton.style.display = "block";
  });
  
  nextButton.style.display = "block";
}

function showScore(){
  questionElement.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  feedback.innerHTML = "";
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";

  // Clear answer choices
  answersContainer.innerHTML = "";
}

function handleNextButton(){
  if(currentQuestionIndex < quizData.length ){
    showQuestion();
  }else {
    showScore();
  }

}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < quizData.length) {
    currentQuestionIndex++;
    handleNextButton();
  }else {
    startQuiz();
  }
});



startQuiz();
