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

function getHumanChoice(currentRound){
    let choice = "";
    let inputIsValid = false;
    let validChoices = ["rock", "paper", "scissors"];
    let cRoundCorrected = currentRound + 1;
    while (inputIsValid == false) {
        choice = prompt("Round: " + cRoundCorrected + ". Please enter your choice of move. ", "(rock, paper or scissors)").toLowerCase().trim();
        if (validChoices.includes(choice) == true) {
            inputIsValid = true;
        } else {
            alert("Ivalid Input, please input one of the given choices");
        }
    }
    return choice;
}

function playRound(humanChoice, computerChoice, humanWonRound) {
    let humanWins = ["rockscissors", "paperrock"];
    let combinedChoice = humanChoice + computerChoice;
    if (humanChoice == computerChoice) {
        alert("Both selected " + humanChoice + ", the round was a draw, let's replay it.");
        return "draw";
    } else if (humanWins.includes(combinedChoice) == true) {
        alert("You selected " + humanChoice + " and the computer selected " + computerChoice + ", the round was your win.");
        return "true";
    } else {
        alert("You selected " + humanChoice + " and the computer selected " + computerChoice + ", the round was your loss.");
        return "false";
    }

}

function playGame(rounds) {
    alert("Let's play a game of rock paper scissors!")
    let humanScore = 0;
    let computerScore = 0;
    let humanWonRound = "draw";
    for (let i = 0; i < rounds; i++) {
        let notDraw = false;
        while  (notDraw == false) {
            const humanSelection = getHumanChoice(i);
            const computerSelection = getComputerChoice();
            humanWonRound = playRound(humanSelection, computerSelection, humanWonRound);
            if (humanWonRound != "draw") {
                notDraw = true;
            }
        }
        if (humanWonRound == "true") {
            humanScore++;
        } else {
            computerScore++;
        }
        alert("The new score is: You: " + humanScore + " Computer: " + computerScore);
        if (humanScore == 3 || computerScore == 3) {
            break;
        }
    }
    if (humanScore > computerScore) {
        alert("Congrats you won! The final score was You: " + humanScore + " and Computer: " + computerScore);
        return "Human Won";
    } else {
        alert("Better luck next time, you lost. The score was You: " + humanScore + " and Computer: " + computerScore)
        return "Computer Won"
    }
}


console.log(playGame(5));



