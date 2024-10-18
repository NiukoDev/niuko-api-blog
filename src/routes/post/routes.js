import Router from "express";
import {
  createPost,
  getPost,
  getPosts,
  updatePost,
} from "../../controller/post/controller.js";

const router = Router();

router.post("/post", createPost);

router.get("/post/:id", getPost);

router.get("/post", getPosts);

router.put("/post/:id", updatePost);

export default router;
