const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

// express에 옵션 설정하는 메소드
// view engine : 서버에서 처리한 데이터 결과값을 정적인 페이지(HTML 파일)에 보다 편리하게 출력해주기 위해 사용
// 뷰엔진에서 요구하는 형태로 템플릿 파일(문서)을 만들고,
// 해당 템플릿 문서에 서버에서 처리한 데이터를 전달하면 해당 데이터를 화면에 출력할 수 있다.
app.set("views", path.join(__dirname, "views")); // view engine 처리할 때 템플릿의 경로 지정
app.set("view engine", "ejs");

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
  res.render("index");

  /*
  .. ejs 템플릿을 사용할 경우는 render 메소드를 이용해 템플릿 렌더링 하는 방식을 사용 
  const pagePath = path.join(__dirname, "views", "index.html");
  res.sendFile(pagePath);
  */
});

app.get("/restaurants", (req, res) => {
  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  res.render("restaurants", {
    count: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/confirm", (req, res) => {
  res.render("confirm");
});
app.get("/recommend", (req, res) => {
  res.render("recommend");
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
