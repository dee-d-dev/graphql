const { items, categories } = require("../db");

exports.Query = {
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
};
