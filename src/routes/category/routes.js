import Router from "express";
import {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
  getPostsByCategory,
} from "../../controller/category/controller.js";

const router = Router();

router.get("/category", getCategories);

router.get("/category/:id", getPostsByCategory);

router.post("/category", createCategory);

router.put("/category/:id", updateCategory);
 
router.delete("/category/:id", deleteCategory);

export default router;
