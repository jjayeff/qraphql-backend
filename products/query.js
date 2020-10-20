// @ts-nocheck
const { GraphQLString, GraphQLList, GraphQLInt } = require('graphql');
const { productType } = require('./type');
const productServices = require('./services');

const getHey = {
  type: GraphQLString,
  resolve: (_, args) => {
    return 'Hello GraphQL';
  },
};

const getProducts = {
  type: new GraphQLList(productType),
  resolve: (_, args) => {
    return new Promise((resolve, reject) => {
      productServices.getProducts(function (data) {
        resolve(data);
      });
    });
  },
};

const getProductByPrice = {
  type: new GraphQLList(productType),
  args: {
    price: {
      type: GraphQLInt,
    },
  },
  resolve: (_, args) => {
    const priceParams = args.price;
    return new Promise((resolve, reject) => {
      productServices.getProductByPrice(priceParams, (data) => {
        resolve(data);
      });
    });
  },
};

module.exports = {
  getHey: getHey,
  getProducts: getProducts,
  getProductByPrice: getProductByPrice,
};
