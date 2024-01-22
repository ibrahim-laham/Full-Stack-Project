"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
var mongoose_1 = require("mongoose");
var productOrderSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: {
            albumArt: String,
            vinyl: String,
        },
    },
    link: {
        type: {
            spotify: String,
            youtube: String,
            wikipedia: String,
        }
    },
    releaseDate: {
        type: Date,
    },
    description: {
        type: String,
    },
    artistInfo: {
        type: String,
    },
    embedLink: {
        type: String,
    },
    totalTracks: {
        type: Number,
    },
    genre: {
        type: String,
    },
    rating: {
        type: {
            rating: Number,
            pitchforkLink: String,
        },
    },
    quantity: {
        type: Number,
    }
});
exports.orderSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    productList: {
        type: [productOrderSchema],
    },
});
exports.default = mongoose_1.default.model("Order", exports.orderSchema);
