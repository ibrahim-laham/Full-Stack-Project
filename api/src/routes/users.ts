import { Router } from "express";
import passport from "passport";

import {
  createUser,
  getUserById,
  loginWithPassword,
  updateUser,
  getAllUsers,
  makeAdmin,
} from "../controllers/users";
import adminCheck from "../middlewares/adminCheck";

const router = Router();

router.post("/", createUser);
router.post("/login", loginWithPassword);
router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUser
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getUserById
);
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  adminCheck,
  getAllUsers
);
router.put(
  "/:userId/make-admin",
  passport.authenticate("jwt", { session: false }),
  adminCheck,
  makeAdmin
);

export default router;
