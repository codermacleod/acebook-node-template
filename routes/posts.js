const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.get("/myposts", PostsController.User_posts);
router.post("/", PostsController.Create);


module.exports = router;
