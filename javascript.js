
function getComputerChoice(number)
{
if(number<=0.33)return "rock";
else if(number > 0.33 && number <= 0.66)return "Scissor";
else return "paper";
}


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

function getHumanChoice(input){
return input;
}


let humanScore=0;
let computerScore=0;
function playRound(humanChoice, computerChoice) {
    if(humanChoice.toUpperCase()===computerChoice.toUpperCase()){ 
       humanScore+=0.5;
       computerScore+=0.5;
    div2.textContent=`${computerScore}`;
    div3.textContent=`${humanScore}`;
    div4.textContent="Draw!!Both of you chose the same option!!";
}
else if(humanChoice.toUpperCase()=="ROCK" && computerChoice.toUpperCase()=="PAPER"){
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
        let humanSelection = getHumanChoice(input);
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
        let humanSelection = getHumanChoice(input);
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
        let humanSelection = getHumanChoice(input);
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
    
