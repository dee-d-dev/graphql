const { v4: uuid } = require("uuid");
exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    let { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
  },

  addProduct: (parent, { input }, { items }) => {
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

    items.push(newProduct);
    return newProduct;
  },

  addReview: (parent, { input }, { reviews }) => {
    let { date, title, comment, rating, productId } = input;

    const newReview = {
   
      date,
      title,
      comment,
      rating,
      productId,
    };

    reviews.push(newReview);
    return newReview;
  },
};
