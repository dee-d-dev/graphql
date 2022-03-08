exports.Product = {
  category: ({ category_id }, args, { categories }) => {
    const categoryId = category_id;
    const found = categories.find((category) => {
      return category.id === categoryId;
    });
    if (!found) return null;

    return found;
  },
  reviews: ({ id }, args, { reviews }) => {
    const found_reviews = reviews.filter((review) => {
      return review.productId === id;
    });

    return found_reviews;
  },
};
