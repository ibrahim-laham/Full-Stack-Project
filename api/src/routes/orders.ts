import passport from "passport";

import {createOrder, getOrdersById} from "../controllers/orders";

import {Router} from "express";

const router = Router();

router.post("/:userId",passport.authenticate("jwt", { session: false }),createOrder);
router.get("/:userId",passport.authenticate("jwt", { session: false }), getOrdersById);

export default router;