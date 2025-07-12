// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Example product data
const products = [
  { id: 1, name: 'Laptop', category: 'electronics', price: 1000 },
  { id: 2, name: 'Shirt', category: 'clothing', price: 30 },
  { id: 3, name: 'Phone', category: 'electronics', price: 800 },
  { id: 4, name: 'Jacket', category: 'clothing', price: 60 },
  { id: 5, name: 'Headphones', category: 'electronics', price: 150 }
];

// API route to fetch filtered products based on category
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  if (category) {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    return res.json(filteredProducts);
  }
  res.json(products); // Return all products if no category is specified
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
