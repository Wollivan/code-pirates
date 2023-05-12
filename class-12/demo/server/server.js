const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = 8080;
const app = express();
app.use(cors());
const mongoose = require("mongoose");
const bp = require("body-parser");
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL);

const Cat = require("./models/cat");

app.get("/", function (request, response) {
  response.json("You are looking at my root route, how roude!");
});

app.get("/cats", async function (request, response) {
  const cats = await Cat.find(request.query);
  response.json(cats);
});

app.post("/cats", async function (request, response) {
  const newCat = await Cat.create(request.body);
  response.json(newCat);
});

app.delete("/cats/:id", async function (request, response) {
  const deletedCat = await Cat.findByIdAndDelete(request.params.id);
  response.json(deletedCat);
});

app.listen(PORT, () => console.log("App is listening of PORT " + PORT));
