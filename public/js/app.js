document.addEventListener('DOMContentLoaded', () => {
    fetch('/products')
      .then(response => response.json())
      .then(products => {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
          const productDiv = document.createElement('div');
          
          // Create and append the image element
          const productImage = document.createElement('img');
          productImage.src = product.image;
          productImage.alt = product.name;
          productDiv.appendChild(productImage);
          
          // Add product name and price
          const productInfo = document.createElement('div');
          productInfo.textContent = `${product.name} - $${product.price}`;
          productDiv.appendChild(productInfo);
          
          // Add button to add product to cart
          const addButton = document.createElement('button');
          addButton.textContent = 'Add to Cart';
          addButton.addEventListener('click', () => addToCart(product.id));
          productDiv.appendChild(addButton);
          
          productList.appendChild(productDiv);
        });
      });
  
    function addToCart(productId) {
      fetch('/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId })
      }).then(() => {
        updateCart();
      });
    }
  
    function updateCart() {
      fetch('/cart')
        .then(response => response.json())
        .then(cart => {
          const cartDiv = document.getElementById('shopping-cart');
          cartDiv.innerHTML = '';
          cart.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartDiv.appendChild(itemDiv);
          });
          const totalDiv = document.createElement('div');
          totalDiv.id = 'total-price'; // Set ID for styling
          totalDiv.textContent = `Total Price: $${cart.totalPrice}`;
          cartDiv.appendChild(totalDiv);
        });
    }
  
    updateCart();
  });
  