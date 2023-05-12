const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Cat = require("./models/cat");

async function seed() {
  await Cat.create({ name: "Bingo", colour: "Green", hasClaws: false, location: "Yarmouth Pier" });
  await Cat.create({ name: "Bongo", colour: "Yellow", hasClaws: true, location: "Cromer Pier" });

  console.log("Cats created");

  mongoose.disconnect();
}

seed();
