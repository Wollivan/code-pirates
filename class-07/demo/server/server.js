// import express from our node_modules
const express = require("express"); // the react equivalent is - import express from "express"
// import cors from our node_modules
const cors = require("cors");
// dotenv works slightly differently
require("dotenv").config();
// set the PORT for our server to run on
const PORT = process.env.PORT;
// express returns a MASSIVE object, which we are assigning to a variable called app
const app = express();
// allow our express server to use the cors middleware
app.use(cors());

// this is my retro game data
const data = [
  {
    name: "Manic Miner",
    year: 1983,
  },
  {
    name: "Sonic the Hedgehog",
    year: 1991,
  },
  {
    name: "Marble Madness",
    year: 1984,
  },
  {
    name: "Star Wars: Dark Forces",
    year: 1995,
  },
  {
    name: "Metroid",
    year: 1986,
  },
];

function findGameByYear(year) {
  const result = data.find(function (game) {
    return game.year === year;
  });
  return result;
}

// create an endpoint
app.get("/", (request, response) => {
  response.json("You are looking at the root route of my server. How roude.");
});

app.get("/1983", (request, response) => {
  const game = findGameByYear(1983);
  response.json(game);
});

app.get("/1991", (request, response) => {
  const game = findGameByYear(1991);
  response.json(game);
});

app.listen(PORT, function () {
  console.log("App is listening on PORT " + PORT);
});
