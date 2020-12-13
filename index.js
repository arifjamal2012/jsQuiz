var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question('Whats your name? ');
console.log('Welcome '+ userName);
console.log("Let's play a mini javascript quiz");
console.log('--------------------------');

var highScore ={
    name: 'Arif',
    score: 4
};

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer) {
    console.log('You are correct');
    score++;
  }else {
    console.log('Sorry its incorrect');
  }

  console.log('You have scored',score);
  console.log('**********************');

}


var questions = [{
    question:'Which company developed JavaScript? ',
    answer:'netscape'
  
  },
  {
    question:'Inside which HTML element do we put the JavaScript?',
    answer:'script'
  },
  {
    question:'What is the original name of JavaScript? ',
    answer:'mocha'
  },
  {
    question:'Which symbol is used for single line comments in Javascript? ',
    answer:'//'

  }
];


for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

console.log('Your total score is ', score);
console.log('Highest score is secured by ',highScore.name,highScore.score);
console.log('Check the highest score if you are there ping me i will update it!');