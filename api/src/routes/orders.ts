import {createOrder} from "../controllers/orders";

import {Router} from "express";

const router = Router();

router.post("/:userId",createOrder);


export default router;