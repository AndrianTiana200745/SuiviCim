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