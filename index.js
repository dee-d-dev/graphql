const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
    numberOfAnimals: Int
    price: Float
    isExpensive: Boolean
    Shoes: [String]
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    numberOfAnimals: () => {
      return 4;
    },
    price: () => {
      return 44.6;
    },
    isExpensive: () => {
      return true;
    },
    Shoes: () => {
        return ['Zanotti', "Air Force", " Air Jordans Dunk lows"]
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server is running at ${url}`);
});
