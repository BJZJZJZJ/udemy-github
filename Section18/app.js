const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

// 미들웨어 정의
// 정적파일 (css, js, img 등등)이 request 요청때 같이 response 하도록 처리
// express.static("폴더명")
app.use(express.static(path.join(__dirname, "public")));

// 미들웨어 함수. requset 구문 분석
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  const pagePath = path.join(__dirname, "views", "index.html");
  res.sendFile(pagePath);
});

app.get("/restaurants", (req, res) => {
  const pagePath = path.join(__dirname, "views", "restaurants.html");
  res.sendFile(pagePath);
});

app.get("/about", (req, res) => {
  const pagePath = path.join(__dirname, "views", "about.html");
  res.sendFile(pagePath);
});

app.get("/confirm", (req, res) => {
  const pagePath = path.join(__dirname, "views", "confirm.html");
  res.sendFile(pagePath);
});
app.get("/recommend", (req, res) => {
  const pagePath = path.join(__dirname, "views", "recommend.html");
  res.sendFile(pagePath);
});

app.post("/recommend", (req, res) => {
  // req.body => form 입력데이터를 object 형식으로 전달 받음
  console.log(req.body);

  const restaurant = req.body;

  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect("/confirm");
});

app.listen(3434);
