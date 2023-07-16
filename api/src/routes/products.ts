import {
  createProduct,
  deleteProduct,
  getProductByTitle,
  getProduct,
  updateProduct,
} from "../controllers/products";

import { Router } from "express";

const router = Router();

router.post("/", createProduct);
router.get("/", getProduct);
router.put("/:id", updateProduct);
router.get("/:title", getProductByTitle);
router.delete("/:id", deleteProduct);

export default router;
