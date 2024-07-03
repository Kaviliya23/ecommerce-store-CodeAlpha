const cartModel = require('../models/cartModel');
const productModel = require('../models/productModel');

module.exports = {
  getCart: (req, res) => {
    res.json({
      items: cartModel.getCart(),
      totalPrice: cartModel.getTotalPrice()
    });
  },
  addToCart: (req, res) => {
    const product = productModel.getProductById(req.body.productId);
    if (product) {
      cartModel.addToCart(product);
      res.status(200).send();
    } else {
      res.status(404).send('Product not found');
    }
  }
};
