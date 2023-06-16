const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  postId: {
    type: String,
    unique: true
  },
  user: {
    type: String
  },
  password: {
    type: Number
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  createdAt: {
    type: String
  }
});

module.exports = mongoose.model("posts", postsSchema);