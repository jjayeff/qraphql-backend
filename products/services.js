// @ts-nocheck
const { Products } = require('../db/setup');

const getProducts = (callback) => {
  Products.find(function (err, result) {
    if (err) {
      callback(err);
    } else {
      callback(result);
    }
  });
};

const getProductByPrice = (price, callback) => {
  Products.find({ price: { $lt: price } }, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(result);
    }
  });
};

const createProduct = (args, callback) => {
  const product = new Products({
    name: args.name,
    price: args.price,
    category: args.category,
  });
  product.save((err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(result);
    }
  });
};

const deleteProduct = (productId, callback) => {
  Products.findOneAndRemove({ _id: productId }, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(result);
    }
  });
};

module.exports = {
  getProducts: getProducts,
  getProductByPrice: getProductByPrice,
  createProduct: createProduct,
  deleteProduct: deleteProduct,
};
