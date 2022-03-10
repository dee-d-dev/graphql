exports.Category = {
  products: ({ id: categoryId }, { filter }, { db}) => {
    let find_category_product = db.items.filter((item) => {
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
