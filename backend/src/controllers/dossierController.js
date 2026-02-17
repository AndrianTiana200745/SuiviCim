const dossierService = require('../services/dossierService');

exports.createDossier = async (req, res) => {
  try {
    const dossier = await dossierService.createDossier(req.body);
    res.status(201).json(dossier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllDossiers = async (req, res) => {
  try {
    const dossiers = await dossierService.getAllDossiers();
    res.json(dossiers);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.getDossierById = async (req, res) => {
  try {
    const dossier = await dossierService.getDossierById(req.params.id);
    if (!dossier) {
      return res.status(404).json({ message: 'Dossier non trouvé' });
    }
    res.json(dossier);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.updateDossier = async (req, res) => {
  try {
    const updatedDossier = await dossierService.updateDossier(req.params.id, req.body);
    if (!updatedDossier) {
      return res.status(404).json({ message: 'Dossier non trouvé' });
    }
    res.json(updatedDossier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteDossier = async (req, res) => {
  try {
    const deletedDossier = await dossierService.deleteDossier(req.params.id);
    if (!deletedDossier) {
      return res.status(404).json({ message: 'Dossier non trouvé' });
    }
    res.json({ message: 'Dossier supprimé' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};