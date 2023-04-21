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
  {
    name: "Dragon's Lair",
    year: 1983,
  },
  {
    name: "Dragon Quest VI",
    year: 1995,
  },
];
// finds all the objects in our data array that matches the year provided
function findGameByYear(year) {
  const result = data.filter(function (game) {
    return game.year == year;
  });
  return result;
}

// create an endpoint
app.get("/", function (request, response) {
  response.json("You are looking at the root route of my server. How roude.");
});

// using request.query
app.get("/games", function (request, response) {
  // dataToReturn will be all of the data
  let dataToReturn = data;
  // UNLESS we provided year in the query, then only show the ones that match
  if (request.query.year) {
    dataToReturn = findGameByYear(request.query.year);
  }
  response.json(dataToReturn);
});

// using request.params
app.get("/games/:year", (request, response) => {
  const games = findGameByYear(request.params.year);
  response.json(games);
});

app.listen(PORT, function () {
  console.log("App is listening on PORT " + PORT);
});
