"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header = ({ setHeader }) => {
    return (react_1.default.createElement("header", { className: "header-box" },
        react_1.default.createElement("div", { className: "title-box" },
            react_1.default.createElement("p", { className: "the" }, "- the -"),
            react_1.default.createElement("p", { className: "Current" }, "Current"),
            react_1.default.createElement("p", { className: "subtitle" }, "Interactive Data Visualizations"))));
};
exports.default = Header;
