const express = require('express');
const router = express.Router();

const posts = [
];

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();

    const postsData = posts.map((data) => {
      return {
        postId: data.postId,
        user: data.user,
        title: data.title,
        createdAt: data.createdAt,
      };
    });

    return res.status(200).json({ data: postsData });
  } catch (error) {
    return res.status(400).json({ error, message: "잘못된 요청입니다." });
  }
});

// 포스트 추가 API
const comments = require("../schemas/comments");
router.post("/posts/:postsId/comments", async (req, res) => {
  const { postsId } = req.params;

  const existscommentss = await comments.find({ postsId: Number(postsId) });
  if (existscommentss.length) {
    return res.status(400).json({ success: false, errorMessage: "메시지 테스트" });
  }

  await comments.create({ postsId: Number(postsId), quantity: quantity });

  res.json({ result: "success" });
});

// 포스트 수정 API 
router.put("/goods/:goodsId/cart", async (req, res) => {
  const { postsId } = req.params;
  // const { quantity } = req.body;

  const existsCarts = await Cart.find({ goodsId: Number(goodsId) });
  if (existsCarts.length) {
    await Cart.updateOne({ goodsId: Number(goodsId) }, { $set: { quantity } });
  }

  res.json({ success: true });
})


// get에 관한 API? 
const Posts = require("../schemas/posts");
router.post("/posts", async (req, res) => {
        const { postId, user, password, title, content, createdAt } = req.body;

  const posts = await Posts.find({ postId });
  if (posts.length) {
    return res.status(400).json({ success: false, errorMessage: "데이터 형식이 올바르지 않습니다" });
  }

  const createdPosts = await Posts.create({ postId, user, password, title, content, createdAt });

  res.json({ posts: createdPosts });
});

module.exports = router;
