const products = [
    { id: 1, name: 'New Design Frock', price: '18.80', image: '/images/clothes1.jpeg' },
    { id: 2, name: 'T-Shirt', price: ' 5', image: '/images/men1.jpeg' },
    { id: 3, name: 'Men Full Kit ', price: '20', image: '/images/men3.jpeg' },
    { id: 4, name: 'Fashion Canvas Shoes', price: ' 15.12', image: '/images/shoes1.jpeg' },
    { id: 5, name: 'Men Shoes Sneakers', price: ' 6.60', image: '/images/shoes3.jpeg' },
    { id: 6, name: 'Women Casual Shoes', price: ' 10', image: '/images/womens1.jpeg' },
    { id: 7, name: 'High Heels', price: ' 30', image: '/images/womens2.jpeg' }
  ];
  
  module.exports = {
    getAllProducts: () => products,
    getProductById: (id) => products.find(product => product.id === id)
  };
  