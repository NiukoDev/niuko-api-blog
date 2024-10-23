import Router from "express";
import {
  getUser,
  createUser,
  updateUser,
  getAdminUsers,
} from "../../controller/user/controller.js";

const router = Router();

router.post("/user/login", getUser);

router.post("/user/register", createUser);

router.put("/user/:id", updateUser);

router.get("/user/admin", getAdminUsers);

export default router;