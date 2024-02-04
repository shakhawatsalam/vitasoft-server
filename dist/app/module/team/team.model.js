"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TeamSchema = new mongoose_1.default.Schema({
    teamName: { type: String, required: true },
    teams: [{ type: Object, required: true }],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
const TeamModel = mongoose_1.default.model("Team", TeamSchema);
exports.default = TeamModel;
