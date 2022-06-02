"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const path_1 = __importDefault(require("path"));
const typeDefs_1 = require("./schemas/typeDefs");
const resolvers_1 = require("./schemas/resolvers");
const connection_1 = require("./dbConfig/connection");
// Establish connection with database and listen for error events
connection_1.db.on("error", (err) => console.error(err));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
server.applyMiddleware({ app });
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.join(__dirname, "../client/build")));
}
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../client/build/index.html"));
});
connection_1.db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
