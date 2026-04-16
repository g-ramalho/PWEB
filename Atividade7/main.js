function getComputerChoice() {
  return Math.round(Math.random() * 2);
}

const btn = document.getElementById("play");
btn.addEventListener("click", function () {
  const chosenStr = document.querySelector(
    'input[name="choice"]:checked',
  )?.value;

  const winnerElement = document.getElementById("winner");
  const computerChoiceElement = document.getElementById("computer-choice");

  if (chosenStr) {
    console.log(`Você escolheu ${chosenStr}`);

    let chosen = -1;

    if (chosenStr === "Pedra") chosen = 0;
    else if (chosenStr === "Papel") chosen = 1;
    else if (chosenStr === "Tesoura") chosen = 2;

    const computerChosen = getComputerChoice();

    let computerChosenStr = "";

    if (computerChosen == 0) computerChosenStr = "Pedra";
    else if (computerChosen == 1) computerChosenStr = "Papel";
    else if (computerChosen == 2) computerChosenStr = "Tesoura";

    computerChoiceElement.textContent = `O computador escolheu ${computerChosenStr}!`;

    if (chosen == computerChosen) {
      // empate
      winnerElement.textContent = "Empate! Ninguém venceu.";
    } else {
      const playerWins =
        (chosen === 0 && computerChosen === 2) || // Pedra ganha de Tesoura
        (chosen === 1 && computerChosen === 0) || // Papel ganha de Pedra
        (chosen === 2 && computerChosen === 1); // Tesoura ganha de Papel

      if (playerWins) {
        winnerElement.textContent = "Você venceu! Parabéns!!!";
      } else {
        winnerElement.textContent = "O computador venceu! Jogue novamente!!!";
      }
    }
  } else {
    if (computerChoiceElement) computerChoiceElement.textContent = "";
    winnerElement.textContent = "Você precisa escolher uma jogada para fazer!";
  }
});
