exports.Product = {
  category: ({ category_id }, args, { categories }) => {
    const categoryId = category_id;
    const found = categories.find((category) => {
      return category.id === categoryId;
    });
    if (!found) return null;

    return found;
  },
  reviews: (parent, args, { reviews }) => {
    return reviews;
  },
};
