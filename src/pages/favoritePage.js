import React from 'react';
import { useFavorites } from '../context/favoriteContext';
import { Link } from 'react-router-dom';
import '../styles/favorites.css';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h2>Mes Favoris</h2>
      {favorites.length === 0 ? (
        <p>Aucun produit en favori pour le moment.</p>
      ) : (
        <div className="products-grid">
          {favorites.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price.toLocaleString()} FCFA</p>
              <Link to={`/product/${product.id}`} className="view-btn">Voir</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
