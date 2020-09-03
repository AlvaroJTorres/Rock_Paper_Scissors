function game(){
    var playerScore = 0;
    var computerScore = 0;

    function computerPlay() {
        var selection = ["rock", "paper", "scissors"];
        return selection[Math.floor(Math.random()*selection.length)];
    }

    function playRound(playerSelection, computerSelection) {
        
        if(playerSelection === "rock" && computerSelection === "paper") {
            console.log("You Loose! Paper beats Rock!");
            computerScore++;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log("You Win! Rock beats Scissors");
            playerScore++;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            console.log("You Loose! Scissors beats Paper");
            computerScore++;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log("You Win! Paper beats Rock");
            playerScore++;
        } else if (playerSelection === "scissor" && computerSelection === "rock") {
            console.log("You Loose! Rock beats Scissors");
            computerScore++;
        } else if (playerSelection === "scissor" && computerSelection === "paper") {
            console.log("You Win! Scissors beats Paper");
            playerScore++;
        } else if (playerSelection === computerSelection) {
            console.log("Draw!");
        }
    }

    for(var i = 0; i < 5; i++) {
        var playerSelection = prompt("Enter 'Rock', 'Paper' or 'Scissors': ");
        const computerSelection = computerPlay();
        playerSelection = playerSelection.toLocaleLowerCase();

        if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            console.log("Invalid entry, please try again")
            break;
        } else {
            playRound(playerSelection, computerSelection);
        }

    }
    
    if(playerScore > computerScore) {
        console.log("You're the winner! with " + playerScore + " points.");
    } else if (computerScore > playerScore) {
        console.log("You Loose! with " + playerScore + " points.");
    } else if (computerScore === playerScore) {
        console.log("It's a draw");
    }

}

game();