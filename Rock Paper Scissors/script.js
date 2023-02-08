const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userChoice = document.getElementById("user-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result");

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userSelection, computerSelection) {
  userChoice.textContent = `Your choice: ${userSelection}`;
  computerChoice.textContent = `Computer's choice: ${computerSelection}`;

  let roundResult;
  if (userSelection === computerSelection) {
    result.textContent = "It's a tie!";
    
    return "tie";
  } else {
    switch (userSelection) {
      case "Rock":
        roundResult = computerSelection === "Scissors" ? "win" : "lose";
        break;
      case "Paper":
        roundResult = computerSelection === "Rock" ? "win" : "lose";
        break;
      case "Scissors":
        roundResult = computerSelection === "Paper" ? "win" : "lose";
        break;
    }

    if (roundResult === "win") {
      result.textContent = "You win!";
      
    } else if (roundResult === "lose") {
      result.textContent = "You lose!";
     
    }
  }

  return roundResult;
}

rock.addEventListener("click", () => {
  playRound("Rock", computerPlay());
});

paper.addEventListener("click", () => {
  playRound("Paper", computerPlay());
});

scissors.addEventListener("click", () => {
  playRound("Scissors", computerPlay());
});
