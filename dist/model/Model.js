"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
/* eslint-disable @typescript-eslint/no-require-imports */
const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Number,
        default: 0
    }
});
exports.List = mongoose.model('List', listSchema);
//completed ? 0 - novo / 1 - fazendo / 2 - concluido
