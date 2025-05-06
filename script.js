humanScore = 0;
computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randInt = getRandomInt(3);
    if (randInt == 0) {
        return "rock";
    } else if (randInt == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let humanWins = ["rockscissors", "paperrock"];
    let combinedChoice = humanChoice + computerChoice;
    if (humanChoice == computerChoice) {
        alert("Both selected " + humanChoice + ", the round was a draw.");
    } else if (humanWins.includes(combinedChoice) == true) {
        alert("You selected " + humanChoice + " and the computer selected " + computerChoice + ", the round was your win.");
        document.getElementById("humanScore").innerHTML = "Your Score:" + (humanScore + 1);
        humanScore++;
        if (humanScore == 5) {
            document.getElementById("winMessage").innerHTML = "Congrats you Win! Refresh the page to play again."
            const buttons = document.getElementById("buttons");
            buttons.removeChild(buttons.firstElementChild);
            buttons.removeChild(buttons.firstElementChild);
            buttons.removeChild(buttons.firstElementChild);
        }
        return humanScore;
    } else {
        alert("You selected " + humanChoice + " and the computer selected " + computerChoice + ", the round was your loss.");
        document.getElementById("computerScore").innerHTML = "Computer Score:" + (computerScore + 1);
        computerScore++
        if (computerScore == 5) {
            document.getElementById("winMessage").innerHTML = "Better luck next time you lost. Refresh the page to play again."
            const buttons = document.getElementById("buttons");
            buttons.removeChild(buttons.firstElementChild);
            buttons.removeChild(buttons.firstElementChild);
            buttons.removeChild(buttons.firstElementChild);
        }
        return computerScore;
    }

}
