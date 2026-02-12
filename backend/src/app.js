const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware pour parser le JSON
app.use(express.json());

// Routes principales
app.use('/api/users', userRoutes);

// Route test
app.get('/', (req, res) => {
  res.send('Backend SuiviCim fonctionne ! 🚀');
});

module.exports = app;
