const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());

// get the data from the json file
const weatherData = require("./data/weather.json");

// Forecast class
class Forecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}

app.get("/", function (request, response) {
  response.json("You are looking at my root route for the city exporer API");
});

app.get("/weather", function (request, response) {
  const { lat, lon, searchQuery } = request.query;

  const cityData = weatherData.find(function (city) {
    return city.city_name.toLowerCase() === searchQuery.toLowerCase(); // && city.lat === lat && city.lon === lon;
  });

  const forecastArray = [];

  cityData.data.forEach(function (day) {
    const date = day.datetime;
    const description = day.weather.description;

    const fc = new Forecast(date, description);
    forecastArray.push(fc);
  });

  response.json(forecastArray);
});

app.listen(PORT, function () {
  console.log("Server is running on PORT " + PORT);
});
