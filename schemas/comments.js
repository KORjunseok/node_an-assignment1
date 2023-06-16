const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  commentsId: {
    type: String,
    unique: true
  },
  user: {
    type: String
  },
  password: {
    type: Number
  },
  content: {
    type: String
  },
  createdAt: {
    type: String
  }
});

module.exports = mongoose.model("comments", commentsSchema);