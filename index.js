const { ApolloServer } = require("apollo-server");
const { items, categories, reviews } = require("./db");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers: { Category, Product, Query },
  context: { items, categories, reviews },
});

server.listen().then(({ url }) => {
  console.log(`server is running at ${url}`);
});
