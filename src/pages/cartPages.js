// src/pages/CartPage.js
import React from 'react';
import { useCart } from '../context/cardContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <div>Ton panier est vide.</div>;

  return (
    <div>
      <h2>Mon Panier</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.price} FCFA
            <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
