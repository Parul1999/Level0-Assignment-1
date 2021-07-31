const readLineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bgYellow("Welcome to the Quiz of ' HOW WELL DO YOU KNOW ")+chalk.bgYellow.italic.bold("PARUL ? '"));

const userName = readLineSync.question(chalk.cyanBright("\nWhat's your good name ?\n"));

console.log(chalk.cyan.bold(userName.toUpperCase() + " Let's Hope you know her well !!"))

var score = 0;
var questionListOne =[{
question:"She lives in Delhi.",
answer:false
},
{
question:"She has a younger brother.",
answer:true
},
{
question:"She has watched 'FRIENDS'.",
answer:false
},
{question:"She loves Pizza over Burger.",
answer:true},
{
question:"She does'nt know cooking,",
answer:true
}
]

var questionListTwo=[
{
question:"How many pet(s) she have?",
answer:"1"
},
{
question:"How may siblings she have?",
answer:"1"
},
{
question:"What's the date of her B'day?",
answer:"8"
},
{
question:"How many people are there in her family?",
answer:"6"
},
{
question:"How many schools she has been to?",
answer:"2"
}
]

function checkAns(ques,correctAns)
{
  var userAns = readLineSync.keyInYNStrict(chalk.bold.yellowBright(ques));
  if(userAns == correctAns)
  {
    console.log(chalk.greenBright("Correct Answer"));
    score = score + 1;
     console.log(chalk.greenBright("Score = "+ score));
  }
  else
  {
    console.log(chalk.redBright("Wrong Answer"));
    console.log(chalk.redBright("There is something you did'nt know , So score remains same"));
  }
}

for(var i =0;i<questionListOne.length;i++)
{
  currQues =questionListOne[i]
  console.log();
  checkAns(currQues.question,currQues.answer)
}

console.log(chalk.underline.magentaBright.bold("\nOK! Let's move to the questions you might not know !! ")+chalk.magentaBright.bold("\nAnswer b/w 0-9"))

function checkNumberAns(ques,correctAns)
{
  var userAns = readLineSync.keyIn(chalk.bold.yellowBright(ques)+" ", {limit: '$<0-9>'});
  if(userAns == correctAns)
  {
    console.log(chalk.greenBright("Correct Answer"));
    score = score + 1;
     console.log(chalk.greenBright("Score = "+ score));
  }
  else
  {
    console.log(chalk.redBright("Wrong Answer"));
    console.log(chalk.redBright("There is something you did'nt know , So score remains same"));
  }
}

for(var i =0;i<questionListTwo.length;i++)
{
  currQues =questionListTwo[i]
  console.log();
  checkNumberAns(currQues.question,currQues.answer)
}

console.log(chalk.bgYellow("\nTHE QUIZ ENDED !! FINAL SCORE IS :" + score + " "));