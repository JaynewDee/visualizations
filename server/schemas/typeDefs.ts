import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Project {
    title: String
  }

  type Query {
    projects: [Project]!
    project(title: String!): Project
  }
`;

export { typeDefs };
