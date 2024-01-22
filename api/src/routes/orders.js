"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = require("passport");
var orders_1 = require("../controllers/orders");
var express_1 = require("express");
var router = (0, express_1.Router)();
router.post("/:userId", passport_1.default.authenticate("jwt", { session: false }), orders_1.createOrder);
router.get("/:userId", passport_1.default.authenticate("jwt", { session: false }), orders_1.getOrdersById);
exports.default = router;
