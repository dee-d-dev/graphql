const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql` 

`;

const server = new ApolloServer({ }).

server.listen(3000, () => {
  console.log("server is running");
});