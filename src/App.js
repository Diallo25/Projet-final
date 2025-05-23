import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePageOrcaStyle from './pages/home';
import ProductsPage from './pages/ProdutsPage';
import ProductDetail from './pages/productDetail';
import CartPage from './pages/cartPages';
import LoginPage from './pages/login';
import AboutPage from './pages/aboutPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/contact';
import CategoriesPage from './pages/categoriesPage';
import CategoryProductsPage from './pages/categoriesProductPage';

import ProtectedRoute from './composants/protectRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageOrcaStyle />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:slug" element={<CategoryProductsPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protège la page panier */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
