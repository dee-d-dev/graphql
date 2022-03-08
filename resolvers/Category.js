exports.Category = {
  products: ({ id: categoryId }, args, { items }) => {
    const find_product = items.filter((item) => {
      return item.category_id === categoryId;
    });

    if (!find_product) return null;

    return find_product;
  },
};
