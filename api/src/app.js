"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server here
var express_1 = require("express");
var cors_1 = require("cors");
var passport_1 = require("passport");
var products_1 = require("./routes/products");
var users_1 = require("./routes/users");
var orders_1 = require("./routes/orders");
var apiErrorHandler_1 = require("./middlewares/apiErrorHandler");
var passport_2 = require("./config/passport");
var path_1 = require("path");
var app = (0, express_1.default)();
var _dirname = path_1.default.dirname("");
var buildpath = path_1.default.join(_dirname, "../client/build");
app.use(express_1.default.static(buildpath));
app.get("/", function (req, res) {
    res.sendFile(path_1.default.join(_dirname, "../client/build/index.html"), function (error) {
        if (error) {
            res.status(500).send(error);
        }
    });
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.jwtStrategy);
app.use("/products", products_1.default);
app.use("/users", users_1.default);
app.use("/orders", orders_1.default);
app.use(apiErrorHandler_1.default);
exports.default = app;
