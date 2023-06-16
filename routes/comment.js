const express = require("express");
const Posts = require("../schemas/posts");
const Comments = require("../schemas/comments");
const router = express.Router();

router.get("/:_postId", async (req, res) => {
  const comments = await Comments.find();
  const postsIds = comments.map((comments) => comments.postsId);

  const posts = await Posts.find({ postsId: postsIds });

  const results = comments.map((comments) => {
                return {
                        posts: posts.find((posts) => posts.postsId === comments.postsId)
                };
  });

  res.json({
    comments: results,
  });
});

module.exports = router;