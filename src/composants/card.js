import React from 'react';
import { useCart } from '../context/cardContext';
import '../Styles/card.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Mon Panier</h2>

      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <span>
                {item.name} - {item.quantity} x {item.price.toFixed(2)} €
              </span>
              <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
            </div>
          ))}

          <div className="cart-total">
            Total : {totalPrice.toFixed(2)} €
          </div>

          <button className="clear-btn" onClick={clearCart}>
            Vider le panier
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
