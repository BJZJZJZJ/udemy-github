/* 플레이어 구성과 관련된 로직 */

function openPlayerConfig(e) {
  const selectedPid = +e.target.dataset.pid; // + : parseInt

  editedPlayer = selectedPid;

  backdropElement.style.display = "block";
  configOverlayElement.style.display = "block";
}

function closePlayerConfig(e) {
  backdropElement.style.display = "none";
  configOverlayElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(e) {
  e.preventDefault(); // 브라우저의 기본 이벤트 처리를 막음. (button의 경우 새로고침)
  const formData = new FormData(e.target); // <Form> 태그 안쪽 입력 데이터를 가져오는 FormData 객체

  // id 가 username 인 입력값을 가져온 후, 앞 뒤쪽으로 있는 초과 공백 제거 (.trim())
  const enteredPlayerName = formData.get("username").trim();

  // empty string =>  falsy
  if (!enteredPlayerName) {
    errorOutputElement.textContent = "Please enter a valid name!";
    e.target.firstElementChild.classList.add("error");
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "p-" + editedPlayer + "-data"
  );

  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
