let pElement = document.querySelectorAll("p")[1];

function changePText(event) {
  console.log(event.target.innerText);
  event.target.innerText = "clicked!";
}

pElement.addEventListener("click", changePText);

let inputElement = document.querySelector("input");

inputElement.addEventListener("input", function (e) {
  console.log(e.target);
});
