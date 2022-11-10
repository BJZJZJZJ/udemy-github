/*
 https://nodejs.org/dist/latest-v18.x/docs/api/http.html#httpcreateserveroptions-requestlistener 
 
 더 자세한 내용은 nodeJS 문서 참고
*/

// request : nodeJS에 내장되어있는 package를 가져오는 함수

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

server.listen(3434);
