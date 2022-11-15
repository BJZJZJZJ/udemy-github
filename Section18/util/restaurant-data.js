const fs = require("fs")
const path = require("path");

const filePath = path.join(__dirname,".." ,"data", "restaurants.json");


function getStoredRestaurant() {
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}


function storeRestaurant(data){
    fs.writeFileSync(filePath, JSON.stringify(data));
}


module.exports = {
    getStoredRestaurant : getStoredRestaurant,
    storeRestaurant : storeRestaurant
}
