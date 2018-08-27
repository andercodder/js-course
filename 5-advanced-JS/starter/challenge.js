/* (function(){
    function Questions(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;

    }
Questions.prototype.displayQuestions = function () {
    console.log(this.question);
    for (var i = 0; i < this.answer.length; i++) {
        console.log(i + ': ' + this.answer[i]);
    }
}

Questions.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
        console.log('correct answer!');
    } else {
        console.log('Wrong answer. Try again')
    }
}

var question1 = new Questions("andre is the coolest person here any here?", ["yes", "no"], 0);
var question2 = new Questions("is this a teaser ?", ["yes", "no"], 1);
var question3 = new Questions("Is Js the Coolest language?", ["yes", "no"], 0);

var questions = [question1, question2, question3];
var choosequestion = Math.floor(Math.random() * questions.length);
//console.log(questions[choosequestion]);

questions[choosequestion].displayQuestions();
var answer = parseInt(prompt('please select the answer'));

questions[choosequestion].checkAnswer(answer);
})(); //the fact that the code is inside of a fuction it makes it private this is IFFE */


//Expert Level
(function () {
    function Questions(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;

    }
    Questions.prototype.displayQuestions = function () {
        console.log(this.question);
        for (var i = 0; i < this.answer.length; i++) {
            console.log(i + ': ' + this.answer[i]);
        }
    }

    Questions.prototype.checkAnswer = function (ans, callback) {
        if (ans === this.correct) {
            var sc
            console.log('correct answer!');
          sc =  callback(true);


        } else {
            console.log('Wrong answer. Try again');

            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Questions.prototype.displayScore = function(score) {
        console.log('Your current score id: ' + score);
        console.log('------------------------------')
    }

   


    var question1 = new Questions("andre is the coolest person here any here?", ["yes", "no"], 0);
    var question2 = new Questions("is this a teaser ?", ["yes", "no"], 1);
    var question3 = new Questions("Is Js the Coolest language?", ["yes", "no"], 0);

    function score() {

        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {

        var questions = [question1, question2, question3];
        var choosequestion = Math.floor(Math.random() * questions.length);
        //console.log(questions[choosequestion]);

        questions[choosequestion].displayQuestions();
        var answer = (prompt('please select the answer'));

        questions[choosequestion].checkAnswer(parseInt(answer),keepScore);
        
        if (answer !=='exit'){
            nextQuestion();

        }
    }

    nextQuestion();

})(); //the fact that the code is inside of a fuction it makes it private this is IFFE