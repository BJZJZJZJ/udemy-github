// 8. try - catch
// try : 에러가 발생할 수 잇는 코드를 묶어줘요
// catch : 에러가 발생 했을 때 처리를 사용자 정의. 
//    브라우저나 nodeJS에 의해 지정된 에러 대신 사용자 정의 에러로 처리됨.
            

const fs = require("fs");

function readFile() {
  try {
    const fileData = fs.readFileSync("data.json");
  } catch (error) {
    console.log(error);
    console.log("에러 발생");
  }
  console.log("푸에훙");
  
}

readFile();


