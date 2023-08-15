const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  photo: {
    type: String,
  },
  file: {
    type: String,
  },
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
const Blogs = mongoose.model("blog", blogSchema);

module.exports = Blogs;
