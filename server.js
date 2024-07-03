const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // This line serves static files from the 'public' directory

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
