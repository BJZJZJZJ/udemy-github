/*
 https://nodejs.org/dist/latest-v18.x/docs/api/http.html#httpcreateserveroptions-requestlistener 
 
 더 자세한 내용은 nodeJS 문서 참고
*/

/*
nodeJS 를 활용한 response, request 예시 
// require : 외부 package를 가져오는 함수
const http = require("node:http");

function handleRequest(req, res) {
  // req.url : URL의 path 부분을 보유
  if (req.url === "/yasu") {
    res.statsuCode = 200;
    res.end("<h1>" + new Date().toISOString() + "</h1>");
  } else {
    // 요청 번호 200 : 정상적인 request 에용
    // response 전송 메소드. 일단 HelloWorld 전송
    res.statsuCode = 200;
    res.end("<h1>hello World!</h1>");
  }
}

const server = http.createServer(handleRequest);

// 포트번호 
server.listen(3434);
*/

//
//
//

// express를 이용한 서버 구축
const fs = require("fs"); // 파일 입출력을 위한 file system
const path = require("path"); // 모든 운영체제에서 동작하게 하기 위한 path
const express = require("express");
const app = express();

// 미들웨어 함수. requset 구문 분석
app.use(
  express.urlencoded({
    extended: false,
  })
);

/* 
    GET METHOD를 이용한 요청이 들어왔을 때 요청 처리
    get( 'path' , '처리 function (res,req , [...next] )' )
    send 의 기본 statusCode 는 200
*/

app.get("/", (req, res) => {
  res.send(
    "<form action='store-user' method='POST'><label>Name </label> <input type='text' name='username'><button>submit</button></form>"
  );
});

app.get("/yasu", (req, res) => {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/users", (req, res) => {
  const filepath = path.join(__dirname, "data", "user.json");
  const fileData = fs.readFileSync(filepath);
  const existingUsers = JSON.parse(fileData);

  let outputHTML = "";

  for (let i = 0; i < existingUsers.length; i++) {
    outputHTML += "<h2>" + existingUsers[i] + "</h2>";
  }

  res.send("<h1> User List </h1>" + outputHTML);
});

/* 
    "/" 경로의 form 에서 post 요청을 전송했을 때의 처리.
    
    - req.body.???  ... ??? : form 안의 input name을 속성으로 사용할 수 있음.
    - 그 전에, Form Data를 사용하기 위해서는 request 요청데이터를 구문 분석 할 필요가 있음    
    app.use() (미을웨어 함수)
*/
app.post("/store-user", (req, res) => {
  const userName = req.body.username;

  /* 
    __dirname : 현재 프로젝트의 디렉토리 절대 경로를 뜻함
    과정 : file open -> 데이터 처리 -> file write 

     writeFileSync (path , data(type string))
  */
  const filepath = path.join(__dirname, "data", "user.json");
  const fileData = fs.readFileSync(filepath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  fs.writeFileSync(filepath, JSON.stringify(existingUsers));

  res.send("<h1> Username stored!</h1>");
});

app.listen(3434); // Port number
