const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();


app.use(cors({
  origin: "*"
}));
app.use("/images", express.static(path.join(__dirname, "images")));

const category = require("./category.json");
const restaurantChains = require("./restaurantChains.json");

app.get("/categories", (req, res) => {
  res.json(category);
});

app.get("/top-restaurant-chains", (req, res) => {
  res.json(restaurantChains);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});