// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 
 // Import the CSS file
const App = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [categories] = useState(['electronics', 'clothing']);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products?category=${category}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]); // Refetch products when category changes

  return (
    <div>
      <h1>Product List</h1>
      
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="">All Categories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
