function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];

  let rand = Math.floor(Math.random() * computerChoice.length);

  let computerValue = computerChoice[rand];

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
  } else if (playerChoice === computerGame) {
    result = "it's tie";
  } else {
    result = "you lose";
  }

  return result;
}

function playGame() {
  let W = 0;
  let T = 0;
  let L = 0;
  for (let i = 0; i <= 4; i++) {
    var playerChoice = prompt("faites votre choix").toLowerCase();
    var computerGame = getComputerChoice();
    resultRound = game(playerChoice, computerGame);
    if (resultRound == "you win") {
      W = W + 1;
    } else if (resultRound == "you lose") {
      L = L + 1;
    } else if (resultRound == "it's tie") {
      T = T + 1;
    }
    console.log(resultRound);
  }
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

playGame();
