// let x=Math.random();
// console.log(x);

function getComputerChoice(number)
{
if(number<=0.33)return "Rock";
else if(number > 0.33 && number <= 0.66)return "Scissor";
else return "Paper";
}

// console.log(getComputerChoice(x));
function getHumanChoice(){
 let input=prompt("Please Enter your choice","Rock");
return input;
}
// console.log(getHumanChoice());

let humanScore=0;//global variable
let computerScore=0;
function playRound(humanChoice, computerChoice) {
    if(humanChoice.toUpperCase()===computerChoice.toUpperCase()){  //switch statement
       humanScore+=0.5;
       computerScore+=0.5;
       console.log(`Your score=${humanScore} and computer score=${computerScore}.`);//string cocatenation
       return "draw";
}
else if(humanChoice.toUpperCase()=="ROCK" && computerChoice.toUpperCase()=="PAPER"){//error when rock and paper
    computerScore+=1;
    console.log(`Your score=${humanScore} and computer score=${computerScore}.`);
    return "You lose! Paper beats Rock";
}
else if(humanChoice.toUpperCase()=="PAPER" && computerChoice.toUpperCase()=="SCISSOR"){
    computerScore+=1;
    console.log(`Your score=${humanScore} and computer score=${computerScore}.`);
    return "You lose! Scissor beats Paper";
}
else if(humanChoice.toUpperCase()=="ROCK" && computerChoice.toUpperCase()=="SCISSOR"){
    humanScore+=1;
    console.log(`Your score=${humanScore} and computer score=${computerScore}.`);
    return "You Win! Rock beats Scissor";
}
else if(humanChoice.toUpperCase()=="SCISSOR" && computerChoice.toUpperCase()=="PAPER"){
    humanScore+=1;
    console.log(`Your score=${humanScore} and computer score=${computerScore}.`);
    return "You Win! Scissor beats Paper";
}
else if(humanChoice.toUpperCase()=="PAPER" && computerChoice.toUpperCase()=="ROCK"){
    humanScore+=1;
    console.log(`Your score=${humanScore} and computer score=${computerScore}.`);
    return "You Win! Paper beats Rock";
}
else if(humanChoice.toUpperCase()=="SCISSOR" && computerChoice.toUpperCase()=="ROCK"){
    computerScore+=1;
    console.log(`Your score=${humanScore} and computer score=${computerScore}.`);
    return "You lose! Rock beats Scissor";
}
 }
//   let humanSelection = getHumanChoice();
//   let computerSelection = getComputerChoice(x);
//   console.log(playRound(humanSelection,computerSelection));
 
function playGame(){
    let i;
    for(i=0;i<5;i++){
        let x=Math.random();
        let humanSelection = getHumanChoice();
        console.log(humanSelection);
        let computerSelection = getComputerChoice(x);
        console.log(computerSelection);
       playRound(humanSelection,computerSelection);
    }
    if(humanScore>computerScore) return "Winner";
    else if(computerScore>humanScore) return "loser";
    else return "draw";
}

  console.log(playGame());