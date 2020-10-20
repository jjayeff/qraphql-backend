// @ts-nocheck
const { GraphQLString, GraphQLList, GraphQLInt } = require('graphql');
const { productType } = require('./type');
const productServices = require('./services');

const addProduct = {
  type: productType,
  args: {
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLInt,
    },
    category: {
      type: new GraphQLList(GraphQLString),
    },
  },
  resolve: (_, args) => {
    return new Promise((resolve, reject) => {
      productServices.createProduct(args, (data) => {
        console.log(data);
        resolve(data);
      });
    });
  },
};

const deleteProduct = {
  type: productType,
  args: {
    id: {
      type: GraphQLString,
    },
  },
  resolve: (_, args) => {
    return new Promise((resolve, reject) => {
      productServices.deleteProduct(args.id, (data) => {
        console.log(data);
        resolve(data);
      });
    });
  },
};

module.exports = {
  addProduct: addProduct,
  deleteProduct: deleteProduct,
};
