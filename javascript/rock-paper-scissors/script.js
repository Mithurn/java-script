// Selecting the buttons
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// Selecting result display elements
const userChoiceDisplay = document.querySelector(".user-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const resultText = document.querySelector(".result-text");

// Possible choices
const choices = ["✊", "✋", "✌️"];

// Function to play game
function playGame(userChoice) {
    // Display user choice
    userChoiceDisplay.textContent = userChoice;

    // Generate random choice for computer
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.textContent = computerChoice;

    // Determine the winner
    if (userChoice === computerChoice) {
        resultText.textContent = "It's a tie! 😐";
        resultText.style.color = "yellow";
    } else if (
        (userChoice === "✊" && computerChoice === "✌️") || // Rock beats Scissors
        (userChoice === "✋" && computerChoice === "✊") || // Paper beats Rock
        (userChoice === "✌️" && computerChoice === "✋")   // Scissors beats Paper
    ) {
        resultText.textContent = "You win! 🎉";
        resultText.style.color = "green";
    } else {
        resultText.textContent = "You lose! 😢";
        resultText.style.color = "red";
    }
}

// Adding event listeners to buttons
rockBtn.addEventListener("click", () => playGame("✊"));
paperBtn.addEventListener("click", () => playGame("✋"));
scissorsBtn.addEventListener("click", () => playGame("✌️"));
