const { items } = require("../db");


exports.Category = {
  products: (parent, args, ctx) => {
    const find_product = items.filter((item) => {
      return item.category_id === parent.id;
    });

    if (!find_product) return null;

    return find_product;
  },
};
