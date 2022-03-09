exports.Query = {
  hello: () => {
    return "Hello World";
  },
  products: (parent, { filter, avgRating }, { items, reviews }) => {
    let filteredItems = items;

    if (filter) {
      let { onSale, avgRating } = filter;
      if (onSale) {
        filteredItems = items.filter((item) => {
          return item.onSale;
        });
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredItems = filteredItems.filter((product) => {
          let sumRating = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += avgRating;
            }
          });
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
