// 10. async

// const fs = require("fs");
const fs = require("fs/promises"); // promise 개념을 사용해용
const path = require("path");

function readFile() {
  const filePath = path.join(__dirname, "data.txt");

  // reaeFile"Sync" : 동기적으로 파일 읽는다는 뜻이였네요
  // const fileData = fs.readFileSync(filePath);
  // console.log(fileData.toString());

  /*
    promise 개념 미적용
  // readFile의 2번째 매개변수 : readFile 처리가 끝나면 실행될 함수 (콜백함수)
  // 비동기로 동작하는 readFile 은 return 값이 없기에 콜백함수에서 모든 결과를 처리해야함.
  fs.readFile(filePath, (err, data) => {
    console.log(err);
    console.log(data.toString());
  });
  */

  // 콜백지옥 : 비동기 처리 시, 콜백 안에서 또 다른 콜백이 계속 호출되어 코드가 드러워지는 경우
  // 이를 해결하기 위해 promise 라는 개념을 사용
  // promise 적용
  // promise : 자바스크립트에서 표준화된 객체. then() 이라는 메소드를 가지고 있음
  // then 은 다시 콜백함수를 매개변수로 가짐. << 해당 콜백 함수는 앞선 비동기 함수 실행 후 실행됨.
  // .catch() 함수는 오류가 발생했을 때 처리를 정의

  fs.readFile(filePath)
    .then((fileData) => {
      console.log(fileData.toString());
    })
    .then(() => {
      console.log("내가 2등");
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("메롱 내가 먼저 실행됨 ㅅㄱ");
}

readFile();



// async 키워드 : 함수가 promise를 return 하게 만들어줌
// await 키워드 : async 함수 내에서 사용 가능. 비동기 처리를 동기처리 하는 것처럼 보여주게 만듦
// ... 이 부분은 더 공부가 필요할 것 같아요