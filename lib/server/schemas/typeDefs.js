"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type Project {
    title: String
  }

  type Query {
    projects: [Project]!
    project(title: String!): Project
  }
`;
exports.typeDefs = typeDefs;
