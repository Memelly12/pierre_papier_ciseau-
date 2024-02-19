const canvaComputer = document.querySelector("#canvaComputer");
const canvaPlayer = document.querySelector("#canvaPlayer");
const choice = document.querySelectorAll("button");
const canvaPchoice = document.querySelector("#canvaPchoice");
const canvaCchoice = document.querySelector("#canvaCchoice");
const resulFinal = document.querySelector("#resultFinal");
let W = 0;
let T = 0;
let L = 0;
let playerChoice;
var computerGame;
var resultRound;

function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];

  let rand = Math.floor(Math.random() * computerChoice.length);

  let computerValue = computerChoice[rand];
  canvaCchoice.setAttribute("src", `images/${computerValue}.png`);

  console.log(computerValue);
  return computerValue;
}

function game(playerChoice, computerGame) {
  console.log(`player choice : ${playerChoice}`);

  console.log(`opponent choice : ${computerGame}`);
  var result;

  let win =
    (playerChoice === "rock" && computerGame === "scissors") ||
    (playerChoice === "paper" && computerGame === "rock") ||
    (playerChoice === "scissors" && computerGame === "paper");

  if (win) {
    result = "you win";
    canvaComputer.style.backgroundColor = "red";
    canvaPlayer.style.backgroundColor = "green";
  } else if (playerChoice === computerGame) {
    result = "it's tie";
  } else {
    canvaComputer.style.backgroundColor = "green";
    canvaPlayer.style.backgroundColor = "red";
    result = "you lose";
  }

  return result;
}

function playGame() {
  if (W + L + T == 5) {
    console.log(`nombre de victoires: ${W} victoires`);
    console.log(`nombre de defaites: ${L} défaites`);
    console.log(`nombre de nuls: ${T} nuls`);
    if (W > L) {
      console.log("vous avez gagnez le jeu");
    } else if (W < L) {
      console.log("vous avez perdu le jeu ");
    } else {
      console.log("match nul ");
    }
  }
}
choice.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.id;
    canvaPchoice.setAttribute("src", `images/${playerChoice}.png`);
    computerGame = getComputerChoice();
    resultRound = game(playerChoice, computerGame);
    console.log(resultRound);
    if (resultRound == "you win") {
      W = W + 1;
    } else if (resultRound == "you lose") {
      L = L + 1;
    } else if (resultRound == "it's tie") {
      T = T + 1;
    }
  });
});

playGame();
