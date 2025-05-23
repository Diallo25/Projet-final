import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import des contextes
import { CartProvider } from './context/cardContext';
import { FavoriteProvider } from './context/favoryContext'; // à créer comme expliqué

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </CartProvider>
  </React.StrictMode>
);

// Mesure des performances
reportWebVitals();
