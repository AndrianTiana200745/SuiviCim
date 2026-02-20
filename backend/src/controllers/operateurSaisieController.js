const operateurSaisieService = require('../services/operateurSaisieService');

exports.createOperateurSaisie = async (req, res) => {
  try {
    const operateurSaisie = await operateurSaisieService.createOperateurSaisie(req.body);
    res.status(201).json(operateurSaisie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllOperateursSaisie = async (req, res) => {
  try {
    const operateursSaisie = await operateurSaisieService.getAllOperateursSaisie();
    res.json(operateursSaisie);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.getOperateurSaisieById = async (req, res) => {
  try {
    const operateurSaisie = await operateurSaisieService.getOperateurSaisieById(req.params.id);
    if (!operateurSaisie) {
      return res.status(404).json({ message: 'Opérateur de saisie non trouvé' });
    }
    res.json(operateurSaisie);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.updateOperateurSaisie = async (req, res) => {
  try {
    const updatedOperateurSaisie = await operateurSaisieService.updateOperateurSaisie(req.params.id, req.body);
    if (!updatedOperateurSaisie) {
      return res.status(404).json({ message: 'Opérateur de saisie non trouvé' });
    }
    res.json(updatedOperateurSaisie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteOperateurSaisie = async (req, res) => {
  try {
    const deletedOperateurSaisie = await operateurSaisieService.deleteOperateurSaisie(req.params.id);
    if (!deletedOperateurSaisie) {
      return res.status(404).json({ message: 'Opérateur de saisie non trouvé' });
    }
    res.json({ message: 'Opérateur de saisie supprimé' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};