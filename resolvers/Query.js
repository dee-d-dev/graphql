exports.Query = {
  hello: () => {
    return "Hello World";
  },
  products: (parent, { filter }, { items }) => {
    let filteredItems = items;

    if (filter) {
      let { onSale } = filter;
      if (onSale === true) {
        filteredItems = filteredItems.filter((item) => {
          return item.onSale;
        });
      }
    }
    return filteredItems;
  },
  product: (parent, { id }, { items }) => {
    const find_product = items.find((product) => {
      return product.id === id;
    });
    if (!find_product) return null;

    return find_product;
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, { id }, { categories }) => {
    const found = categories.find((category) => {
      return category.id === id;
    });

    if (!found) return null;
    return found;
  },
};
