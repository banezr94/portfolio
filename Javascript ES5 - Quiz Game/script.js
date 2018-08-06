
(function() {
var Question = function( question, answers, correctAnswer){
	this.question = question,
	this.answers = answers,
	this.correctAnswer = correctAnswer
}

var q1 = new Question("What is my name?", ["Branislav", "Luka", "Aleksa"], 0);

var q2 = new Question("What is my favorite color?", ["Red", "Blue", "Grey"], 3);

var q3 = new Question("What is my favore animal?", ["Dog", "Cat", "Mouse"], 0);

var questions = [q1, q2, q3];

Question.prototype.displayQuestion = function() {
	console.log(this.question);

	for(var i = 0; i < this.answers.length ; i++){
		console.log(i + " : " + this.answers[i] )
	};
} 

Question.prototype.checkAnswer = function(ans, callback) {
	var sc;
	if (ans === this.correctAnswer) {
            console.log('Correct answer!');
            sc = callback(true);

        } else {
            console.log('Wrong answer. Try again :)')
            sc = callback(false);
        }
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
	console.log("Your current score is: " + score);
	console.log("--------------------------------------")
}

function score(){
	var sc = 0;
	return function(correct){
		if(correct){
			sc++;
		}

		return sc;
	}
}

var keepScore = score();

function nextQuestion(){

	var n = Math.floor(Math.random() * questions.length);

	questions[n].displayQuestion();

	var answer = prompt('Please select the correct answer.');


	if(answer !== "exit"){
		questions[n].checkAnswer(parseInt(answer), keepScore);

		nextQuestion();
	}
}

nextQuestion();

})();







