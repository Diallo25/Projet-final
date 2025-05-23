import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Styles/login.css';  // Assure-toi que le chemin est bon

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const fakeUser = {
    email: 'user@example.com',
    password: 'password123',
    name: 'Amadou Diallo',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === fakeUser.email && password === fakeUser.password) {
      localStorage.setItem('loggedInUser', JSON.stringify(fakeUser));
      setError('');
      navigate('/');
    } else {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <main className="login-page">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} className="login-form" noValidate>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="exemple@domaine.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="btn-login">Se connecter</button>
      </form>

      <p className="register-link">
        Pas encore inscrit ? <Link to="/register">Créer un compte</Link>
      </p>
    </main>
  );
};

export default LoginPage;
