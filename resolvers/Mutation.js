const { v4: uuid } = require("uuid");
exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    let { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };

    categories.push(newCategory);
    return newCategory; 
  },
};
