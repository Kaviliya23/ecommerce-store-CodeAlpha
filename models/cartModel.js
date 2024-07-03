const cart = [];

module.exports = {
  getCart: () => cart,
  addToCart: (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  },
  getTotalPrice: () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
};
