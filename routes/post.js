const router = require("express").Router();
const Post = require("../models/Post");

// create a post

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(err);
  }
});

// update a post
router.put("/:id", async (req, res) => {
  const post = Post.findById(req.params.id);
  try {
    if (post.userId === req.body.userId) {
      await post.updateOne({$set: req.body});
      res.status(200).json("the post has been updated")

    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
