const { ApolloServer } = require("apollo-server");
const { items, categories, reviews } = require("./db");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { typeDefs } = require("./schema");
const { db } = require("./db");
const server = new ApolloServer({
  typeDefs,
  resolvers: { Category, Product, Query, Mutation },
  context: { db },
});

server.listen().then(({ url }) => {
  console.log(`server is running at ${url}`);
});
