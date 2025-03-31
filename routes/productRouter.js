import express from "express";
import {
  fetchProducts,
  createProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", fetchProducts);
router.post("/", createProduct);

export default router;
