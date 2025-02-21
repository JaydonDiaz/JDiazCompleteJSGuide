const startGameBtn = document.getElementById('start-game-btn');

gameIsRunning = false;
const ROCK = 'ROCK'
const DEFAULT_USER_CHOICE = ROCK
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WIN = 'PLAYER WINS'
const RESULT_COMPUTER_WIN = 'COMPUTER WINS'

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase()
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice, ${DEFAULT_USER_CHOICE} was selected for you.`)
    return DEFAULT_USER_CHOICE;
  }
  return selection
}

const getComputerChoice = () => {
  const randomValue = Math.random()
  if (randomValue <= 0.34) {
    return ROCK
  } else if (randomValue <= 0.67) {
    return PAPER
  } else {
    return SCISSORS
  }
}

const winner = (cChoice, pChoice) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW
  } else if (
    cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK
  ) {
    return RESULT_PLAYER_WIN
  } else if (
    pChoice === ROCK && cChoice === PAPER ||
    pChoice === PAPER && cChoice === SCISSORS ||
    pChoice === SCISSORS && cChoice === ROCK
  ) {
    return RESULT_COMPUTER_WIN
  }
}

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true
  console.log('Game is starting!');

  const playerSelection = getPlayerChoice()

  const computerSelection = getComputerChoice()

  const getWinner = winner(computerSelection, playerSelection)
  if (getWinner === RESULT_DRAW) {
    message = `You both picked ${playerSelection}, so it's a draw.`
  } else if (getWinner === RESULT_PLAYER_WIN) {
    message = `You picked ${playerSelection}, the computer picked ${computerSelection}. You win!`
  } else {
    message = `You picked ${playerSelection}, the computer picked ${computerSelection}. You lose!`
  }
  alert(message)
  gameIsRunning = false;

})

