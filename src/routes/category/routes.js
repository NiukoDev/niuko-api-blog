import Router from "express";
import {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../../controller/category/controller.js";

const router = Router();

router.get("/category", getCategories);

router.post("/category", createCategory);

router.put("/category/:id", updateCategory);

router.delete("/category/:id", deleteCategory);

export default router;
