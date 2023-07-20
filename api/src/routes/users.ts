import { Router } from "express";
import passport from "passport";

import {
  createUser,
  getUserById,
  loginWithPassword,
  updateUser,
} from "../controllers/users";

const router = Router();

router.post("/", createUser);
router.post("/login", loginWithPassword);
router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUser
);
router.get("/:id", getUserById);

export default router;
