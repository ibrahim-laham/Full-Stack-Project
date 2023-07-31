import { Router } from "express";
import passport from "passport";

import {
  createProduct,
  deleteProduct,
  getProductById,
  getProduct,
  updateProduct,
} from "../controllers/products";
import adminCheck from "../middlewares/adminCheck";

const router = Router();

router.get("/", getProduct);
router.get("/:id", getProductById);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  adminCheck,
  createProduct
);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  adminCheck,
  updateProduct
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  adminCheck,
  deleteProduct
);

export default router;
