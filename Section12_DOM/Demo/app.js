let inputElement = document.querySelector("input");
let counter = document.querySelector("span");

console.log(inputElement);

inputElement.addEventListener("input", function (event) {
  remainText = 60 - event.target.value.length;
  counter.innerText = remainText;

  if (inputElement.value.length >= 50) {
    counter.classList.add("warning");
    inputElement.classList.add("warning");
  } else {
    counter.classList.remove("warning");
    inputElement.classList.remove("warning");
  }
});
