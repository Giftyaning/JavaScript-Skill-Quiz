//Display quiz question when the Start quiz button is clicked
function beginQuiz() {
    var firstIntro = document.getElementById("first-intro");
    var quizQuestion = document.getElementById("quiz");

    firstIntro.style.display = "none";
    quizQuestion.style.display = "block"
}

//Const variables
const timer = document.getElementById("time");
const completedQuestion = document.getElementById("completed");
const remainingQuestion = document.getElementById("remaining");
const questions = document.getElementById("question");
const answerBtn = document.getElementById("answer");

