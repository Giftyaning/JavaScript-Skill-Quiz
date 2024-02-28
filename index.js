//Display quiz question when the Start quiz button is clicked
function beginQuiz() {
    var firstIntro = document.getElementById("first-intro");
    var quizQuestion = document.getElementById("quiz");

    firstIntro.style.display = "none";
    quizQuestion.style.display = "block"
}