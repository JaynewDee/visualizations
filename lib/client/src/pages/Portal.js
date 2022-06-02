"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Home_1 = __importDefault(require("./Home"));
const Covid_1 = __importDefault(require("./Covid"));
const Climate_1 = __importDefault(require("./Climate"));
const react_router_dom_1 = require("react-router-dom");
const Portal = ({ page }) => {
    return (react_1.default.createElement("section", { className: "layout-container" },
        react_1.default.createElement("article", { className: "scroll-and-sort" },
            react_1.default.createElement("h2", { style: { color: "white" }, className: "page-title" }, page),
            react_1.default.createElement("section", { className: "scrollable" },
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "covid-19", element: react_1.default.createElement(Covid_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "climate", element: react_1.default.createElement(Climate_1.default, null) }))))));
};
exports.default = Portal;
