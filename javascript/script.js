function getComputerChoice(){
    let choices = Math.floor(Math.random() * 3 ) + 1;
    if (choices == 1){
        computerChoice = "Rock";
    } else if (choices == 2){
        computerChoice = "Paper";
    } else if(choices == 3){
        computerChoice = "Scissors";
    }

    return computerChoice;
}