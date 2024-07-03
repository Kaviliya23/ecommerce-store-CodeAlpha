const productModel = require('../models/productModel');

module.exports = {
  getProducts: (req, res) => {
    res.json(productModel.getAllProducts());
  }
};
