const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const Cart = require('../models/cart');
const Product = require('../models/Product');
const authMiddleware = require('../middleware/authMiddleware');

// Créer une commande à partir du panier
router.post('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ userId }).populate('items.productId');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Panier vide' });
    }

    const items = cart.items.map(item => ({
      productId: item.productId._id,
      quantity: item.quantity
    }));

    const total = cart.items.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

    const order = new Order({ userId, items, total });
    await order.save();

    // Vider le panier après la commande
    cart.items = [];
    await cart.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Récupérer les commandes d’un utilisateur
router.get('/', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate('items.productId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
