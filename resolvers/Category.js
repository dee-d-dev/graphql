exports.Category = {
  products: ({ id: categoryId }, { filter }, { items }) => {
    let find_category_product = items.filter((item) => {
      return item.category_id === categoryId;
    });

    if (filter) {
      if (filter.onSale === true) {
        find_category_product = find_category_product.filter((item) => {
          return item.onSale;
        });
      }
    }

    return find_category_product;
  },
};
