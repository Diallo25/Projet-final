import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../Data/products';
import { useCart } from '../context/cardContext';
import '../Styles/productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false); // ✅ message d’ajout

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true); // ✅ Affiche le message
    setTimeout(() => setAdded(false), 2000); // ✅ Cache après 2s
  };

  if (!product) {
    return (
      <div className="product-detail">
        <h2>Produit introuvable</h2>
        <Link to="/products" className="back-btn">Retour aux produits</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h2>{product.name}</h2>
        <p className="price">{product.price} FCFA</p>
        <p className="description">
          Ce meuble est conçu avec des matériaux de qualité pour ajouter du style et du confort à votre intérieur.
        </p>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Ajouter au panier
        </button>

        {added && <p className="added-message">✅ Ajouté au panier</p>}

        <Link to="/products" className="back-btn">← Retour aux produits</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
