import { Router } from "express";
import { methods as categoriesController } from "../controllers/categories.controllers.js";

const router = Router();
router.get("/", categoriesController.getCategories); // endpoint to get all categories
export default router;
