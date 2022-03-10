const { v4: uuid } = require("uuid");
exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    let { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    db.categories.push(newCategory);
  },

  addProduct: (parent, { input }, { db }) => {
    let { id, name, description, quantity, price, image, onSale, category_id } =
      input;

    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      category_id,
    };

    db.items.push(newProduct);
    return newProduct;
  },

  addReview: (parent, { input }, { db }) => {
    let { date, title, comment, rating, productId } = input;

    const newReview = {
      date,
      title,
      comment,
      rating,
      productId,
    };

    db.reviews.push(newReview);
    return newReview;
  },
};
