 function Questions(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
   
}
Questions.prototype.displayQuestions = function(){
    console.log(this.question);
    for (var i = 0; i< this.answer.length; i++){
      console.log(i + ': ', this.answer[i]);
    }
}

var question1 = new Questions ("andre is the coolest person here any here?", ["yes", "no"], 0);
var question2 = new Questions("is this a teaser ?", ["yes", "no"], 1);
var question3 = new Questions("Is Js the Coolest language?", ["yes", "no"], 0);

 var questions = [question1, question2, question3];
 var choosequestion = Math.floor(Math.random() * questions.length);
 //console.log(questions[choosequestion]);

 questions[choosequestion].displayQuestions();
//var userA = prompt("Your Answer ?");
//console.log(userA);
//check(userA);
