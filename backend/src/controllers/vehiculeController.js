const vehhiculeService = require('../services/vehiculeService');

exports.createVehicule = async (req, res) => {
  try {
    const vehicule = await vehhiculeService.createVehicule(req.body);
    res.status(201).json(vehicule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllVehicules = async (req, res) => {
  try {
    const vehicules = await vehhiculeService.getAllVehicules();
    res.json(vehicules);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.getVehiculeById = async (req, res) => {
  try {
    const vehicule = await vehhiculeService.getVehiculeById(req.params.id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    res.json(vehicule);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.updateVehicule = async (req, res) => {
  try {
    const vehicule = await vehhiculeService.updateVehicule(req.params.id, req.body);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    res.json(vehicule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteVehicule = async (req, res) => {
  try {
    const vehicule = await vehhiculeService.deleteVehicule(req.params.id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    res.json({ message: 'Véhicule supprimé' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};