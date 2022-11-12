import { Router } from "express";
import { methods as productsController } from "../controllers/products.controllers.js";

const router = Router();

router.get("/", productsController.getProducts); // endpoint to get all products
router.get("/byId/:id", productsController.getProductById); // endpoint to get a product by id
router.get("/category/:category", productsController.getProductsByCategory); // endpoint to get products by category
router.get("/search", productsController.getProductsByQuery); //

export default router;
