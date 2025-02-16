let userScore = 0;
let computerScore = 0;
let drawScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let resultMessage = "";
    if (userChoice === computerChoice) {
        resultMessage = " It's a draw!";
        drawScore++;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = ` You win! ${userChoice} beats ${computerChoice}`;
        userScore++;
    } else {
        resultMessage = ` You lose! ${computerChoice} beats ${userChoice}`;
        computerScore++;
    }

    document.getElementById("result").textContent = resultMessage;
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("draw-score").textContent = drawScore;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    drawScore = 0;
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("draw-score").textContent = drawScore;
    document.getElementById("result").textContent = "Make your move!";
}
