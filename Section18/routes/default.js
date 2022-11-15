const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");

  /*
    .. ejs 템플릿을 사용할 경우는 render 메소드를 이용해 템플릿 렌더링 하는 방식을 사용 
    const pagePath = path.join(__dirname, "views", "index.html");
    res.sendFile(pagePath);
    */
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
