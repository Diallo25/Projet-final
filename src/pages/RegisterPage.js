// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Styles/register.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    // Récupérer la liste des utilisateurs enregistrés
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Vérifier si email existe déjà
    if (users.some(user => user.email === email)) {
      setError('Un compte avec cet email existe déjà.');
      return;
    }

    // Ajouter le nouvel utilisateur
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Compte créé avec succès !');
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2>Créer un compte</h2>
      <form onSubmit={handleRegister} className="register-form">
        {error && <p className="error">{error}</p>}

        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="Adresse e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Mot de passe</label>
        <input
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirmer le mot de passe</label>
        <input
          type="password"
          value={confirmPassword}
          placeholder="Confirmez le mot de passe"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">S'inscrire</button>
        <p>Déjà un compte ? <Link to="/login">Se connecter</Link></p>
      </form>
    </div>
  );
};

export default RegisterPage;
