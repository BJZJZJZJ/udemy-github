// 1st Calculator

const calcButton = document.querySelector("#calculator button");
const inputNumber = document.getElementById("user-number");
const calcOutput = document.getElementById("calculated-sum");

calcButton.addEventListener("click", function (e) {
  let sum = 0;
  const selectedNumber = parseInt(inputNumber.value);

  for (let i = 1; i <= selectedNumber; i++) {
    sum += i;
  }

  calcOutput.innerText = sum;
  calcOutput.style.display = "block";
});

// 2nd highlight-links

const highlightButton = document.querySelector("#highlight-links button");
const hyperLinks = document.querySelectorAll("#highlight-links p a");

highlightButton.addEventListener("click", function (e) {
  for (let link of hyperLinks) {
    link.classList.add("highlight");
  }
});

// 3rd display user data

const userData = {
  name: "BJJ",
  job: "none",
  age: "28",
};

const addUserDataButton = document.querySelector("#user-data button");

addUserDataButton.addEventListener("click", function () {
  const outputUserData = document.getElementById("output-user-data");

  outputUserData.textContent = "";

  for (let key in userData) {
    let tempListElement = document.createElement("li");
    tempListElement.textContent = key + " : " + userData[key];
    outputUserData.append(tempListElement);
  }
});

// 4th dice roll

const diceRollButtonElement = document.querySelector("#statistics button");
const inputDiceNumberElement = document.getElementById("user-target-number");
const outputDiceRollsElement = document.getElementById("dice-rolls");

function rollDice() {
  const temp = Math.floor(Math.random() * 6);
  return temp + 1;
}

diceRollButtonElement.addEventListener("click", function (e) {
  outputDiceRollsElement.textContent = "";

  const targetNumber = inputDiceNumberElement.value;
  let result;

  result = rollDice();

  while (targetNumber != result) {
    result = rollDice();

    const diceResultElement = document.createElement("li");
    diceResultElement.textContent = result;
    outputDiceRollsElement.append(diceResultElement);
  }
});
