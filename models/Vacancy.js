const mongoose = require("mongoose");

const vacancySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  simpleDescription: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});
const Vacancy = mongoose.model("vacancy", vacancySchema);

module.exports = Vacancy;
