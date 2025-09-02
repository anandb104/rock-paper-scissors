// let x=Math.random();
// console.log(x);

function getComputerChoice(number)
{
if(number<=0.33)return "rock";
else if(number > 0.33 && number <= 0.66)return "Scissor";
else return "paper";
}

// console.log(getComputerChoice(x));
const img1=document.querySelector(".r-images");
const img2=document.querySelector(".question");


const rock=document.querySelector("#one");
const paper=document.querySelector("#two");
const scissor=document.querySelector("#three");

const div1=document.querySelector(".compchoice");
const div2=document.querySelector(".compscore");
const div3=document.querySelector(".humscore");
const div4=document.querySelector(".message");

const button1 = document.createElement("button");
button1.classList.add("new");
button1.textContent="Play Again?"
button1.addEventListener("click",()=>location.reload());
const div5=document.querySelector(".playagain");


// let input;
// function playGame(){
// rock.addEventListener("click",()=>{
//     let x=Math.random()
//     input="Rock";
//     div1.textContent=`Computer's choice is:${getComputerChoice(x)}`;
//     playRound(getHumanChoice(),getComputerChoice(x));
//     if(humanScore==5) {
//         div4.textContent+="Congrats you are a Winner :) ";   
//         disableButtons();
//         }
//         else if(computerScore==5){
//                div4.textContent+="Ha ha you are a loser :(";
//                disableButtons();
//         }
        
// });
// paper.addEventListener("click",()=>{
//     let x=Math.random()
//     input="Paper";
//     div1.textContent=`Computer's choice is:${getComputerChoice(x)}`;
//     playRound(getHumanChoice(),getComputerChoice(x));
//     if(humanScore==5) {
//         div4.textContent+="Congrats you are a Winner :)";   
//         disableButtons();
//         }
//         else if(computerScore==5){
//                div4.textContent+="Ha ha you are a loser :(";
//                disableButtons();
//         }
// });
// scissor.addEventListener("click",()=>{
//     let x=Math.random()
//     input="Scissor";
//     div1.textContent=`Computer's choice is:${getComputerChoice(x)}`;
//     playRound(getHumanChoice(),getComputerChoice(x));
//     if(humanScore==5) {
//         div4.textContent+="Congrats you are a Winner :)";   
//         disableButtons();
//         }
//         else if(computerScore==5){
//                div4.textContent+="Ha ha you are a loser :(";
//                disableButtons();
//         }
// });
// }
function getHumanChoice(input){
return input;
}


let humanScore=0;//global variable
let computerScore=0;
function playRound(humanChoice, computerChoice) {
    if(humanChoice.toUpperCase()===computerChoice.toUpperCase()){  //switch statement
       humanScore+=0.5;
       computerScore+=0.5;
    //    console.log(`Your score=${humanScore} and computer score=${computerScore}.`);//string cocatenation
    div2.textContent=`${computerScore}`;
    div3.textContent=`${humanScore}`;
    div4.textContent="Draw!!Both of you chose the same option!!";
}
else if(humanChoice.toUpperCase()=="ROCK" && computerChoice.toUpperCase()=="PAPER"){//error when rock and paper
    computerScore+=1;
    div2.textContent=`${computerScore}`;
    div3.textContent=`${humanScore}`;
    div4.textContent="You lose! Paper beats Rock";
}
else if(humanChoice.toUpperCase()=="PAPER" && computerChoice.toUpperCase()=="SCISSOR"){
    computerScore+=1;
    div2.textContent=`${computerScore}`;
    div3.textContent=`${humanScore}`;
    div4.textContent="You lose! Scissor beats Paper";
}
else if(humanChoice.toUpperCase()=="ROCK" && computerChoice.toUpperCase()=="SCISSOR"){
    humanScore+=1;
    div2.textContent=`${computerScore}`;
    div3.textContent=`${humanScore}`;
    div4.textContent="You Win! Rock beats Scissor";
}
else if(humanChoice.toUpperCase()=="SCISSOR" && computerChoice.toUpperCase()=="PAPER"){
    humanScore+=1;
    div2.textContent=`${computerScore}`;
    div3.textContent=`${humanScore}`;
    div4.textContent="You Win! Scissor beats Paper";
}
else if(humanChoice.toUpperCase()=="PAPER" && computerChoice.toUpperCase()=="ROCK"){
    humanScore+=1;
    div2.textContent=`${computerScore}`;
    div3.textContent=`${humanScore}`;
    div4.textContent="You Win! Paper beats Rock";
}
else if(humanChoice.toUpperCase()=="SCISSOR" && computerChoice.toUpperCase()=="ROCK"){
    computerScore+=1;
    div2.textContent=`${computerScore}`;
    div3.textContent=`${humanScore}`;
    div4.textContent="You lose! Rock beats Scissor";
}
 }

//   let humanSelection = getHumanChoice();
//   let computerSelection = getComputerChoice(x);
//   console.log(playRound(humanSelection,computerSelection));
 
// function playGame(){
//     let i;
//     for(i=0;i<5;i++){
//         let x=Math.random();
//         let humanSelection = getHumanChoice();
//         console.log(humanSelection);
//         let computerSelection = getComputerChoice(x);
//         console.log(computerSelection);
//        playRound(humanSelection,computerSelection);
//     }
//     if(humanScore>computerScore) return "Winner";
//     else if(computerScore>humanScore) return "loser";
//     else return "draw";
// }
function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}
    function playGame(){
    rock.addEventListener("click",()=>{
        input="Rock";
        let x=Math.random();
        let computerSelection = getComputerChoice(x);
        console.log(x);
        let humanSelection = getHumanChoice(input);
        console.log(input);
        img1.innerHTML = "<img class='lh'src='./images/rocker.png'>";
        if(computerSelection=="rock")
            div1.innerHTML = `<img class='lh'src='./images/${computerSelection}er.png'>`;
            else{
                div1.innerHTML = `<img class='lh'src='./images/${computerSelection}.png'>`;
            }
        playRound(humanSelection,computerSelection);
        if(humanScore>=5) {
            div4.textContent="Congrats you are the Winner :).Want to Play Again? ";   
            disableButtons();
            div5.appendChild(button1);
            }
            else if(computerScore>=5){
                   div4.textContent="Sorry you Lost :(.Want to Play Again?";
                   disableButtons();
                   div5.appendChild(button1);
            }
            
    });
    paper.addEventListener("click",()=>{ 
        input="Paper";
        let x=Math.random();
        let computerSelection = getComputerChoice(x);
        console.log(x);
        let humanSelection = getHumanChoice(input);
        console.log(input);
        img1.innerHTML = "<img class='lh'src='./images/paper.png'>"
        if(computerSelection=="rock")
        div1.innerHTML = `<img class='lh'src='./images/${computerSelection}er.png'>`;
        else{
            div1.innerHTML = `<img class='lh'src='./images/${computerSelection}.png'>`;
        }
        playRound(humanSelection,computerSelection);
        if(humanScore>=5) {
            div4.textContent="Congrats you are the Winner :).Want to Play Again?";   
            disableButtons();
            div5.appendChild(button1);
            }
            else if(computerScore>=5){
                   div4.textContent="Sorry you Lost :(.Want to Play Again?";
                   disableButtons();
                   div5.appendChild(button1);
                   
            }
    });
    scissor.addEventListener("click",()=>{
        input="Scissor";
        let x=Math.random();
        let computerSelection = getComputerChoice(x);
        console.log(x);
        let humanSelection = getHumanChoice(input);
        console.log(input);
        img1.innerHTML = "<img class='lh'src='./images/scissor.png'>"
        if(computerSelection=="rock")
            div1.innerHTML = `<img class='lh'src='./images/${computerSelection}er.png'>`;
            else{
                div1.innerHTML = `<img class='lh'src='./images/${computerSelection}.png'>`;
            }
        playRound(humanSelection,computerSelection);
        if(humanScore>=5) {
            div4.textContent="Congrats you are the Winner :).Want to Play Again?";   
            disableButtons();
            div5.appendChild(button1);
            }
            else if(computerScore>=5){
                   div4.textContent="Sorry you Lost :(.Want to Play Again?";
                   disableButtons();
                   div5.appendChild(button1);
            }
    });
}
playGame();
    
