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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./styles/App.scss");
require("./styles/index.scss");
const Header_1 = __importDefault(require("./components/Header"));
const Navigation_1 = __importDefault(require("./components/Navigation"));
const Portal_1 = __importDefault(require("./pages/Portal"));
const App = (props) => {
    const [page, setPage] = (0, react_1.useState)("Home");
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(Navigation_1.default, { setPage: setPage, children: true }),
        react_1.default.createElement(Portal_1.default, { page: page })));
};
exports.default = App;
