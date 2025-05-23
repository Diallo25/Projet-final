import React, { useState } from 'react';
import { emailUs } from '../utils/emailUs'; // adapte le chemin si besoin

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitStatus('Envoi en cours...');

    try {
      await emailUs(formData);
      setSubmitStatus('Merci pour votre message, nous vous répondrons bientôt.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus(error.message || 'Erreur lors de l’envoi.');
    }
  };

  return (
    <main className="contact-page">
      <h1>Contactez-nous</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nom complet
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Votre nom complet"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="votre.email@exemple.com"
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Votre message ici..."
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
      {submitStatus && <p className="submit-status">{submitStatus}</p>}

      <style jsx>{`
        .contact-page {
          max-width: 700px;
          margin: 80px auto;
          padding: 40px 30px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(184, 142, 47, 0.1);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }

        h1 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 2rem;
          color: #b88e2f;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-form label {
          font-weight: 600;
          font-size: 1rem;
          color: #444;
        }

        .contact-form input,
        .contact-form textarea {
          margin-top: 0.5rem;
          width: 100%;
          padding: 0.75rem;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 1rem;
          background-color: #f9f9f9;
          transition: border-color 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #b88e2f;
          outline: none;
        }

        .contact-form button {
          align-self: flex-start;
          padding: 0.75rem 1.5rem;
          background-color: #b88e2f;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #9a761f;
          box-shadow: 0 4px 12px rgba(184, 142, 47, 0.3);
        }

        .submit-status {
          margin-top: 1.5rem;
          text-align: center;
          font-size: 1rem;
          color: #555;
        }

        @media (max-width: 480px) {
          .contact-page {
            padding: 20px;
          }

          h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  );
};

export default ContactPage;
