function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let rand = Math.floor(Math.random() * computerChoice.length);
  let computerValue = computerChoice[rand];
  console.log(computerValue);
}
function game(playerchoice, computerGame) {
  console.log(`player choice : ${playerChoice} `);
  console.log(`opponent choice : ${computerGame} `);
  let win =
    (playerChoice == "rock" && computerGame == "scissors") ||
    (playerChoice == "paper" && computerGame == "rock") ||
    (playerChoice == "scissors" && computerGame == "paper");
  if (win) {
    console.log("you win");
  } else if (playerChoice == computerGame) {
    console.log("it's a tie");
  } else {
    console.log("you lose");
  }
}
let playerChoice = toLowercase(prompt("quelle est votre choix "));
let computerGame = getComputerChoice();

game(playerChoice, computerGame);
