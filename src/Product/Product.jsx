import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import Link for routing
import './Product.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log('API Response:', response.data);  // Debugging line
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products found.</p>  // Display if no products are available
      ) : (
        products.map(product => (
          <div key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.price}$</p>
            <Link to={`/product/${product.id}`} className="view-details-btn">
              View Details
            </Link>  {/* Link to the product detail page with ID */}
          </div>
        ))
      )}
    </div>
  );
};

export default Product;
