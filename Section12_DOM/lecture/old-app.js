/* DOM Drilling */

// console.log(document);
// console.dir(document);
// document.body.children[1].children[0].href = "https://google.com";

/* Query Elements */
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

let anchorElement_ = document.querySelector("#external-link"); // Need css selector
anchorElement.href = "https://naver.com";

/* Add an Element */

// 1) Element 생성
let a = document.createElement("a"); // a 위치는 태그 이름
// 2) 부모 Element에 접근
let p = document.querySelector("p");
// 3) 부모와 연결
p.append(a); // p.insert() 도 가능

a.innerText = "text";
