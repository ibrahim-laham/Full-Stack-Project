import { Router } from "express";
import passport from "passport";

import {
  createUser,
  loginWithPassword,
  updateUserPassword,
} from "../controllers/users";

const router = Router();

router.post("/", createUser);
router.post("/login", loginWithPassword);
router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUserPassword
);

export default router;
