"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// connect database
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
var app_1 = require("./app");
dotenv_1.default.config();
var port = 8000;
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Ecommerce"
};
mongoose_1.default
    .connect(process.env.MONGODB_URI, options)
    .then(function () {
    app_1.default.listen(port, function () {
        console.log("the server is running at port ".concat(port));
    });
})
    .catch(function (error) {
    console.log("MongoDB connection error. make sure the database is running");
    process.exit(1);
});
