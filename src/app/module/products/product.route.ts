import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAllProduct);
router.get("/:id", ProductController.getSingleProduct);
router.put("/:id", ProductController.updateSingleProduct);

export const ProductRoutes = router;
