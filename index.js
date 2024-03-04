const questionElement = document.getElementById("question");
const answerButoon = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");


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


