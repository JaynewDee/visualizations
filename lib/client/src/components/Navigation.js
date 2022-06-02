"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navigation = ({ setPage }) => {
    const [visibility, setVisibility] = (0, react_1.useState)("section-hide");
    const [btnState, setBtn] = (0, react_1.useState)("inactive");
    const handleExpansion = () => {
        if (visibility === "section-hide") {
            setVisibility("section-show");
            setBtn("active");
        }
        else {
            setVisibility("section-hide");
            setBtn("inactive");
        }
    };
    const handleNavSelection = (e) => {
        let selected = e.target.innerText;
        setPage(selected);
    };
    return (react_1.default.createElement("nav", { className: "nav-box" },
        react_1.default.createElement("button", { value: btnState, onClick: () => {
                handleExpansion();
            }, className: "expansion-btn" }, "NAVIGATE"),
        react_1.default.createElement("section", { onClick: (e) => {
                handleNavSelection(e);
            }, className: visibility },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home"),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/covid-19" }, "Covid-19"),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/climate" }, "Climate"))));
};
exports.default = Navigation;
