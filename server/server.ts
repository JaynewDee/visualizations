import express from "express";
import {} from "dotenv/config";
import { ApolloServer } from "apollo-server-express";
import path from "path";
import { typeDefs } from "./schemas/typeDefs";
import { resolvers } from "./schemas/resolvers";
import { db } from "./dbConfig/connection";
// Establish connection with database and listen for error events
db.on("error", (err) => console.error(err));

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req: any, res: any) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
