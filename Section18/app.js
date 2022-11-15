const express = require("express");
const path = require("path");
const app = express();

const defaultRoutes = require("./routes/default");
const restaurantRoutes = require("./routes/restaurants");

// set : express에 옵션 설정하는 메소드
// view engine : 서버에서 처리한 데이터 결과값을 정적인 페이지(HTML 파일)에 보다 편리하게 출력해주기 위해 사용
// 뷰엔진에서 요구하는 형태로 템플릿 파일(문서)을 만들고,
// 해당 템플릿 문서에 서버에서 처리한 데이터를 전달하면 해당 데이터를 화면에 출력할 수 있다.
app.set("views", path.join(__dirname, "views")); // view engine 처리할 때 템플릿의 경로 지정. 이후 response.render 이용
app.set("view engine", "ejs");

// 미들웨어 정의
// 정적파일 (css, js, img 등등)이 request 요청때 같이 response 하도록 처리
// express.static("폴더명")
app.use(express.static(path.join(__dirname, "public")));

// 미들웨어 함수. requset 구문 분석. input Data를 가져오기 위한 미들웨어
app.use(express.urlencoded({ extended: false }));

// 라우팅을 위한 미들웨어
app.use("/", defaultRoutes);
app.use("/", restaurantRoutes);

// 404 error를 위한 미들웨어.
// 라우팅 경로 마지막에 적는 것이 일반적
app.use((req, res) => {
  res.status(404).render("404");
});

// status 500 : server side error
// 발생 했을 때 실행되는 미들웨어
app.use((error, req, res, next) => {
  console.log(error);

  res.status(500).render("500");
});

app.listen(3434);
