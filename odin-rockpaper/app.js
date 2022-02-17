const computerSelections = ["rock", "paper", "scissors"];
function computerPlay() {
  const random = Math.floor(Math.random() * computerSelections.length);
  let computerSelection = computerSelections[random];
  return computerSelection;
}
function playerSelection() {
  let userChoice = prompt("Choose rock, paper, or scissors");
  return userChoice;
}

function playRound(playerSelection, computerSelection) {
  let outcome = "";
  if (playerSelection === "rock" && computerSelection === "paper") {
    outcome = alert("You Lose! Paper beats Rock");
    return outcome;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    outcome = alert("You Lose! Rock beats scissors");
    return outcome;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    outcome = alert("You Lose! Scissors beats paper");
    return outcome;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    outcome = alert("You win! Paper beats rock");
    return outcome;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    outcome = alert("You win! Rock beats scissors");
    return outcome;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    outcome = alert("You win! Paper beats rock");
    return outcome;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection(), computerPlay());
  }
}

game();

// while (userChoice !== "quit") {}

// function playRound(playerSelection, computerSelection) {
//   // your code here!
// }

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
//
// const months = ["January", "February", "March", "April", "May", "June", "July"];

// const random = Math.floor(Math.random() * months.length);
// console.log(random, months[random]);

// class Color {
//   constructor(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//   }
//   greet() {}
// }

// const color1 = new Color(2, 3, 5);
