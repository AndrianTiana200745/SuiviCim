const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const dossierRoutes = require('./routes/dossierRoutes');
const operateurSaisieRoutes = require('./routes/operateurSaisieRoutes');
const impressionRoutes = require('./routes/impressionRoutes');
const centreRoutes = require('./routes/centreRoutes');
const operateurSaisieRoutes = require('./routes/operateurSaisieRoutes');
const operationRoutes = require('./routes/operationRoutes');
const vehiculeRoutes = require('./routes/vehiculeRoutes');

// Middleware pour parser le JSON
app.use(express.json());

// Routes principales
app.use('/api/users', userRoutes);
app.use('/api/dossiers', dossierRoutes);
app.use('/api/operateur-saisie', operateurSaisieRoutes);
app.use('/api/impressions', impressionRoutes);
app.use('/api/centres', centreRoutes);
app.use('/api/operations', operationRoutes);
app.use('/api/vehicules', vehiculeRoutes);

// Route test
app.get('/', (req, res) => {
  res.send('Backend SuiviCim fonctionne ! 🚀');
});

module.exports = app;
