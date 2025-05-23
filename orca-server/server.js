const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Charge les variables d'environnement depuis .env

const app = express();
app.use(express.json());

const productRoutes = require('./routes/product');
app.use('/api/products', productRoutes);

const cartRoutes = require('./routes/cart');
app.use('/api/cart', cartRoutes);

const orderRoutes = require('./routes/order');
app.use('/api/orders', orderRoutes);


// 🔁 Connexion MongoDB (utilise bien MONGO_URI, pas MONGO_URL)
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error('❌ MONGO_URI n\'est pas défini dans le fichier .env');
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB connecté'))
  .catch(err => console.error('❌ Erreur de connexion à MongoDB :', err));

// ✅ Routes
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');

app.use('/api/auth', authRoutes);

// ✅ Exemple de route protégée
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: `Hello ${req.user.username}, tu es connecté !` });
});

// ✅ Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
