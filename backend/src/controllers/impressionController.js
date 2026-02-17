const impressionService = require('../services/impressionService');

exports.createImpression = async (req, res) => {
  try {
    const impression = await impressionService.createImpression(req.body);
    res.status(201).json(impression);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllImpressions = async (req, res) => {
  try {
    const impressions = await impressionService.getAllImpressions();
    res.json(impressions);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.getImpressionById = async (req, res) => {
  try {
    const impression = await impressionService.getImpressionById(req.params.id);
    if (!impression) {
      return res.status(404).json({ message: 'Impression non trouvée' });
    }
    res.json(impression);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.updateImpression = async (req, res) => {
  try {
    const updatedImpression = await impressionService.updateImpression(req.params.id, req.body);
    if (!updatedImpression) {
      return res.status(404).json({ message: 'Impression non trouvée' });
    }
    res.json(updatedImpression);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteImpression = async (req, res) => {
  try {
    const deletedImpression = await impressionService.deleteImpression(req.params.id);
    if (!deletedImpression) {
      return res.status(404).json({ message: 'Impression non trouvée' });
    }
    res.json({ message: 'Impression supprimée' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};