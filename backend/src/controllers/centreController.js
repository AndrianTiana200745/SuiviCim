const centreService = require('../services/centreService');

exports.createCentre = async (req, res) => {
  try {
    const centre = await centreService.createCentre(req.body);
    res.status(201).json(centre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCentres = async (req, res) => {
  try {
    const centres = await centreService.getAllCentres();
    res.json(centres);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.getCentreById = async (req, res) => {
  try {
    const centre = await centreService.getCentreById(req.params.id);
    if (!centre) {
      return res.status(404).json({ message: 'Centre non trouvé' });
    }
    res.json(centre);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.updateCentre = async (req, res) => {
  try {
    const updatedCentre = await centreService.updateCentre(req.params.id, req.body);
    if (!updatedCentre) {
      return res.status(404).json({ message: 'Centre non trouvé' });
    }
    res.json(updatedCentre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCentre = async (req, res) => {
  try {
    const deletedCentre = await centreService.deleteCentre(req.params.id);
    if (!deletedCentre) {
      return res.status(404).json({ message: 'Centre non trouvé' });
    }
    res.json({ message: 'Centre supprimé' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};