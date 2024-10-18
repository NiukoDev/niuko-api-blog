import Router from "express";
import {
  getUser,
  createUser,
  updateUser,
} from "../../controller/user/controller.js";

const router = Router();

router.post("/user/login", getUser);

router.post("/user/register", createUser);

router.put("/user/:id", updateUser);

export default router;