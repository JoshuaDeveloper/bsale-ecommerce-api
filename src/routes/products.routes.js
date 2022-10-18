import { Router } from "express";
import { methods as productsController } from "../controllers/products.controllers.js";

const router = Router();

router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProductById);
router.get("/category/:category", productsController.getProductsByCategory);
router.get("/search", productsController.getProductsByQuery);

export default router;
