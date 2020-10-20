// @ts-nocheck
const mongoose = require('mongoose');

const Products = mongoose.model('products', {
  name: String,
  price: Number,
  category: Array,
  vote: Array,
});

module.exports = {
  Products: Products,
};
