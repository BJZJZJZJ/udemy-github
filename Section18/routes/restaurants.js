const express = require("express");
const router = express.Router();
const uuid = require("uuid");

const resData = require("../util/restaurant-data");

router.get("/restaurants", (req, res) => {
  // GET 메소드에서 url 뒤쪽 ? a=... 와 같은 것을 쿼리 매개변수라고 함.
  // 그 부분을 불러온거에요
  let order = req.query.order;
  let nextOrder = "desc";

  if (order !== "asc" && order !== "desc") {
    order = "asc";
  }

  if (order === "desc") {
    nextOrder = "asc";
  }

  const storedRestaurants = resData.getStoredRestaurant();

  storedRestaurants.sort((resA, resB) => {
    if (
      (resA.name > resB.name && order === "asc") ||
      (resB.name > resA.name && order === "desc")
    ) {
      return 1;
    }
    return -1;
  });

  res.render("restaurants", {
    count: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder,
  });
});

// 동적 라우팅 예시. rid 를 이용해 페이지를 동적으로 생성
router.get("/restaurants/:rid", (req, res) => {
  const rid = req.params.rid;
  const storedRestaurants = resData.getStoredRestaurant();

  // 0보다 큰 값이 return 될 경우, resB -> resA 순으로 정렬
  // 음수가 return 되면 resA -> resB 순으로 정렬
  // sort의 매개변수는 비교를 위한 함수, 안쪽 함수는 비교를 위한 2개의 값

  for (const restaurant of storedRestaurants)
    if (restaurant.id === rid) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }

  res.status(404).render("404");
});

router.get("/confirm", (req, res) => {
  res.render("confirm");
});
router.get("/recommend", (req, res) => {
  res.render("recommend");
});

router.post("/recommend", (req, res) => {
  // req.body => form 입력데이터를 object 형식으로 전달 받음
  console.log(req.body);

  const restaurant = req.body;
  restaurant.id = uuid.v4();

  const storedRestaurants = resData.getStoredRestaurant();

  storedRestaurants.push(restaurant);

  resData.storeRestaurant(storedRestaurants);

  res.redirect("/confirm");
});

module.exports = router;
