let userChoice;
let computerChoice;
let winner;
let computerWin = 0;
let userWin = 0;



function getComputerChoice(){
    let choices = Math.floor(Math.random() * 3 ) + 1;
    if (choices == 1){
        computerChoice = "rock";
    } else if (choices == 2){
        computerChoice = "paper";
    } else if(choices == 3){
        computerChoice = "scissors";
    }
    return computerChoice;
};


function playRound(userChoice, computersChoice){
    if(userChoice == computersChoice){
        computerWin++;
        userWin++;
    } else if (
        (userChoice == "rock" && computersChoice == "scissors") || 
        (userChoice == "scissors" && computersChoice == "papper") || 
        (userChoice == "paper" && computersChoice == "rock")
        ){
        userWin++;
    } else if (
        (computersChoice == "rock" && userChoice == "scissors") || 
        (computersChoice == "scissors" && userChoice == "papper") || 
        (computersChoice == "paper" && userChoice == "rock")
    ){
        computerWin++;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
        console.log(userChoice = prompt("Choose Rock, Paper or Scissors"));
        userChoice = userChoice.toLowerCase();
        console.log(getComputerChoice());
        console.log(playRound(userChoice, computerChoice));
        if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
          console.log(userChoice = prompt("You spelled incorrectly, please try again."));
        }
      }
    
    if(userWin < computerWin){
        winner = "The computer beat your sorry ass!"
        return winner
    } else if(userWin > computerWin){
        winner = "You are the winner!"
        return winner
    } else if(userWin == computerWin){
        winner = "It's a draw!"
        return winner
        
    }
}

console.log(playGame())