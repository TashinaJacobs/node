process.stdout.write('\n\nHello and welcome to this quiz\n\n')

var questions = [
  'How many cats do I have?',
  'What is my middle name?',
  'Where do I live?'
];

var answers = [
  '2',
  'Romana',
  'Wellington, NZ'
];
var usersAnswers = [];

function askQuestion(i){
  process.stdout.write(`\n\n${questions[i]}\n\n`);
};

process.stdin.on('data', function(answer){
  // process.stdout.write(`${answer}`);
  // process.exit();
  var questionNumber = usersAnswers.length;
  var inputAnswer = answer.toString().trim();
  if (inputAnswer == answers[questionNumber]) {
    process.stdout.write(`Correct`);
    usersAnswers.push(inputAnswer);

    if (usersAnswers.length < answers.length) {
      askQuestion(usersAnswers.length);
    } else {
      process.exit();
    }

  } else {
    process.stdout.write(`\n${inputAnswer} is incorrect, please try again\n\n`);
  }

});


askQuestion(0);


process.on('exit', function(){
  process.stdout.write(`\n\n\n Congratulations, you have completed the quiz\n\n\n`);
});
