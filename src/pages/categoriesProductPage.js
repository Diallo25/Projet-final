import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../Data/products';
import '../Styles/categoriesProduct.css';

const CategoryProductsPage = () => {
  const { slug } = useParams();

  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [sortOrder, setSortOrder] = useState('asc');

  // Fonction pour filtrer selon la valeur sélectionnée
  const handlePriceChange = (e) => {
    const value = e.target.value;
    switch (value) {
      case '1':
        setPriceRange([0, 100000]);
        break;
      case '2':
        setPriceRange([100001, 300000]);
        break;
      case '3':
        setPriceRange([300001, Infinity]);
        break;
      default:
        setPriceRange([0, Infinity]);
    }
  };

  // Filtrage et tri des produits
  const filteredProducts = products
    .filter(p => p.category.toLowerCase() === slug.toLowerCase())
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));

  return (
    <div className="category-products">
      <h2>Produits de la catégorie : {slug.charAt(0).toUpperCase() + slug.slice(1)}</h2>

      {/* Filtres */}
      <div className="filters" role="region" aria-label="Filtres de produits">
        <label htmlFor="price-filter">
          Filtrer par prix :
          <select id="price-filter" onChange={handlePriceChange} defaultValue="0">
            <option value="0">Tous</option>
            <option value="1">0 - 100 000 FCFA</option>
            <option value="2">100 001 - 300 000 FCFA</option>
            <option value="3">300 001 FCFA et plus</option>
          </select>
        </label>

        <label htmlFor="sort-order" style={{ marginLeft: '1.5rem' }}>
          Trier :
          <select
            id="sort-order"
            onChange={(e) => setSortOrder(e.target.value)}
            defaultValue="asc"
          >
            <option value="asc">Prix croissant</option>
            <option value="desc">Prix décroissant</option>
          </select>
        </label>
      </div>

      {/* Affichage produits */}
      {filteredProducts.length === 0 ? (
        <p className="no-results">Aucun produit trouvé avec ces critères.</p>
      ) : (
        <div className="products-grid" aria-live="polite">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} loading="lazy" />
              <h3>{product.name}</h3>
              <p className="price">{product.price.toLocaleString()} FCFA</p>
              <Link to={`/product/${product.id}`} className="view-btn" aria-label={`Voir le produit ${product.name}`}>
                Voir le produit
              </Link>
            </div>
          ))}
        </div>
      )}

      <Link to="/categories" className="back-link" aria-label="Retour aux catégories">
        ← Retour aux catégories
      </Link>
    </div>
  );
};

export default CategoryProductsPage;
