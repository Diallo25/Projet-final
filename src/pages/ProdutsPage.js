// src/pages/ProductsPage.js
import React from 'react';
import products from '../Data/products';
import '../Styles/products.css';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h2>Nos Produits</h2>
      <div className="product-list">
        {products.map((item) => (
          <div className="product-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price} FCFA</p>
            <Link to={`/product/${item.id}`} className="view-product">Voir</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
