import Router from "express";
import {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
  getLastPosts,
} from "../../controller/post/controller.js";

const router = Router();

router.post("/post", createPost);

router.get("/post/:id", getPost);

router.get("/post", getPosts);

router.get("/post-last", getLastPosts);

router.put("/post/:id", updatePost);

router.delete("/post/:id", deletePost);

export default router;
