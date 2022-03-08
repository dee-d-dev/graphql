const { categories } = require("../db");

exports.Product = {
  category: (parent, args, ctx) => {
    const categoryId = parent.category_id;
    const found = categories.find((category) => {
      return category.id === categoryId;
    });
    if (!found) return null;

    return found;
  },
};
