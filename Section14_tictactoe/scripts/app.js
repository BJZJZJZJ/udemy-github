/* 초기화를 위한 JS 코드 */

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 0;
let gameIsOver = false;
const players = [
  {
    name: "",
    id: 1,
    symbol: "X",
  },
  {
    name: "",
    id: 2,
    symbol: "O",
  },
];

/* Element 들의 const 상수 */
const configOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");
const winnerNameElement = document.getElementById("winner-name");

const editPlayer1BtnElement = document.getElementById("edit-player1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player2-btn");
const configCancelBtnElement = document.getElementById("config-cancel-btn");
const startBtnElement = document.getElementById("start-game-btn");

// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");
const gameAreaElement = document.getElementById("active-game");

/* config 와 관련된 변수 이벤트*/
editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
configCancelBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);

/* 틱택토 게임 플레이를 위한 이벤트 */
startBtnElement.addEventListener("click", startNewGame);

// for (let fieldElement of gameFieldElements) {
//   fieldElement.addEventListener("click", selectedGameField);
// }

// 위의 반복문을 이용한 방법과도 동일하게 작동하지만 ol 을 클릭한 경우도 작동하므로 약간의 조작을 요구함
gameBoardElement.addEventListener("click", selectedGameField);
