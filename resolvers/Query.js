exports.Query = {
  hello: () => {
    return "Hello World";
  },
  products: (parent, { filter }, { db }) => {
    let filteredItems = db.items;

    if (filter) {
      let { onSale, avgRating } = filter;
      if (onSale) {
        filteredItems = filteredIitems.filter((item) => {
          return item.onSale;
        });
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredItems = filteredItems.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
            const avgProductRating = sumRating / numberOfReviews;
            return avgProductRating >= avgRating;
          });
        });
      }
    }
    return filteredItems;
  },
  product: (parent, { id }, { db }) => {
    const find_product = db.items.find((product) => {
      return product.id === id;
    });
    if (!find_product) return null;

    return find_product;
  },
  categories: (parent, args, { db }) => {
    return db.categories;
  },
  category: (parent, { id }, { db }) => {
    const found = db.categories.find((category) => {
      return category.id === id;
    });

    if (!found) return null;
    return found;
  },
};
