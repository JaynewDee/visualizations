"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const OneDay = ({ date, states, cases }) => {
    return (react_1.default.createElement("div", { style: { color: "white" } },
        react_1.default.createElement("p", null, date),
        react_1.default.createElement("p", null,
            states,
            " states infected"),
        react_1.default.createElement("p", null)));
};
exports.default = OneDay;
