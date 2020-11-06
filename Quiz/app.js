function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which language is used in web development?", ["C", "C#","C++", "HTML"], "HTML"),

    new Question("What is the command of getting console?", ["Ctrl+Shift+A", "Ctrl+Shift+N","Ctrl+Shift+J", "Ctrl+Shift+T"], "Ctrl+Shift+J"),
    
    new Question("What is the full form of CD?", ["Compact Disk", "Compact Drive","Comfort Disk", "Comfort Drive"], "Compact Disk"),

    new Question("Smallest unit of storage?", ["MegaByte", "KiloByte","Bits", "Bytes"], "Bits"),

];


var quiz = new Quiz(questions);


populate();