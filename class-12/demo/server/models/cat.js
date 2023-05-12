const mongoose = require("mongoose");

const { Schema } = mongoose;

const catSchema = new Schema({
  name: String,
  colour: String,
  hasClaws: Boolean,
  location: String,
});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
