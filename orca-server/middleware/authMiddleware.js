const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'tonSecret';

function authMiddleware(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1]; // Format: "Bearer token"

  if (!token) return res.status(401).json({ message: 'Accès refusé, token manquant' });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // { id, username, iat, exp }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token invalide' });
  }
}

module.exports = authMiddleware;
