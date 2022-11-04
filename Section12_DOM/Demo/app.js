let inputElement = document.querySelector("input");
let counter = document.querySelector("span");

console.log(inputElement);

inputElement.addEventListener("input", function (event) {
  counter.innerText = 60 - event.target.value.length;
});
