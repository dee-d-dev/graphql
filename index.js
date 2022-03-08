const { ApolloServer } = require("apollo-server");
const { items, categories } = require("./db");
const { typeDefs } = require("./schema"); 

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    products: () => {
      return items;
    },
    product: (parent, args, ctx) => {
      const productId = args.id;

      const find_product = items.find((product) => {
        return product.id === productId;
      });
      if (!find_product) return null;

      return find_product;
    },
    categories: () => {
      return categories;
    },
    category: (parent, args, ctx) => {
      const found = categories.find((category) => {
        return category.id === args.id;
      });

      if (!found) return null;
      return found;
    },
  },
  Category: {
    products: (parent, args, ctx) => {
      const find_product = items.filter((item) => {
        return item.category_id === parent.id;
      });

      if (!find_product) return null;

      return find_product;
    },
  },
  Product: {
    category: (parent, args, ctx) => {
      const categoryId = parent.category_id;
      const found = categories.find((category) => {
        return category.id === categoryId;
      });
      if (!found) return null;

      return found;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server is running at ${url}`);
});
