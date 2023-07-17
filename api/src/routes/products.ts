import {
  createProduct,
  deleteProduct,
  getProductById,
  getProduct,
  updateProduct,
} from "../controllers/products";

import { Router } from "express";

const router = Router();

router.post("/", createProduct);
router.get("/", getProduct);
router.put("/:id", updateProduct);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);

export default router;
