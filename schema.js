// @ts-nocheck
const { GraphQLSchema, GraphQLObjectType, GraphQLInt } = require('graphql');
const { getHey, getProducts, getProductByPrice } = require('./products/query');
const { addProduct, deleteProduct } = require('./products/mutation');

const queryType = new GraphQLObjectType({
  name: 'queryProduct',
  description: 'query of product',
  fields: {
    hey: getHey,
    getProducts: getProducts,
    getProductByPrice: getProductByPrice,
  },
});

const mutationType = new GraphQLObjectType({
  name: 'mutationProduct',
  description: 'mutation of product',
  fields: {
    addProduct: addProduct,
    deleteProduct: deleteProduct,
  },
});

const MyGraphQLSchema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

module.exports = MyGraphQLSchema;
