"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_1 = __importDefault(require("./App"));
const client_2 = require("@apollo/client");
const react_router_dom_1 = require("react-router-dom");
const client = new client_2.ApolloClient({
    uri: "/graphql",
    cache: new client_2.InMemoryCache(),
});
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(client_2.ApolloProvider, { client: client },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(App_1.default, null)))));
