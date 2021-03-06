const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    numberOfAnimals: Int
    price: Float
    isExpensive: Boolean
    Shoes: [String]
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category!
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category
    addProduct(input: AddProductInput): Product
    addReview(input: AddReviewInput): Review
    deleteCategory(id: ID!): Boolean
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    category: Category
    category_id: ID!
    reviews: [Review!]!
  }

  type Category {
    id: ID
    name: String
    products(filter: ProductsFilterInput): [Product]
  }

  type Review {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }
  input AddProductInput {
    id: ID
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    category_id: ID!
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID
  }
`;
