import Router from "express";
import {
  createComment,
  deleteComment,
} from "../../controller/comment/controller.js";

const router = Router();

router.post("/comment", createComment);

router.delete("/comment/:id", deleteComment);

export default router;
