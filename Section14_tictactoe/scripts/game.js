/* 게임 플레이와 관련된 로직 */

function resetGame() {
  activePlayer = 0;
  currentRound = 0;
  gameIsOver = false;
  gameOverElement.firstChild.innerHTML =
    'You won, <span id="winner-name"> Player NAME</span>!';

  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameBoardElement.children[gameBoardIndex].classList.remove("disabled");
      gameBoardElement.children[gameBoardIndex].textContent = "";
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (!players[0].name || !players[1].name) {
    alert("플레이어 이름을 입력해주세요!");
    return;
  }

  resetGame();

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function checkForGameOver() {
  currentRound++;

  // 행이 같은지 비교
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    )
      return gameData[i][0];
  }

  // 열이 같은지 비교
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    )
      return gameData[0][i];
  }

  // 대각선 비교
  if (
    gameData[0][0] &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  )
    return gameData[0][0];

  if (
    gameData[0][2] &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  )
    return gameData[0][2];

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function switchPlayer() {
  if (activePlayer === 0) activePlayer++;
  else activePlayer--;

  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectedGameField(e) {
  if (e.target.tagName !== "LI" || gameIsOver) {
    return;
  }

  const fieldRow = e.target.dataset.row - 1;
  const fieldCol = e.target.dataset.col - 1;

  if (gameData[fieldRow][fieldCol]) return;

  e.target.classList.add("disabled");
  e.target.textContent = players[activePlayer].symbol;
  gameData[fieldRow][fieldCol] = players[activePlayer].id;

  const winnerId = checkForGameOver();

  if (winnerId > 0) {
    gameOverElement.style.display = "block";
    winnerNameElement.textContent = players[winnerId - 1].name;
    gameIsOver = true;
    return;
  } else if (winnerId < 0) {
    gameOverElement.style.display = "block";
    gameOverElement.firstElementChild.textContent = "DRAW";
    gameIsOver = true;
  }

  switchPlayer();
}
