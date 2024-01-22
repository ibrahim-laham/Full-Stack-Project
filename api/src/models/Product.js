"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
// product model
var mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.default.Schema({
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
    }
});
exports.default = mongoose_1.default.model("Product", exports.productSchema);
