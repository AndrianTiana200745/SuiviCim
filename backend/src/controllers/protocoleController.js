const protocoleService = require('../services/protocoleService');

exports.createProtocole = async (req, res) => {
  try {
    const protocole = await protocoleService.createProtocole(req.body);
    res.status(201).json(protocole);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllProtocoles = async (req, res) => {
  try {
    const protocoles = await protocoleService.getAllProtocoles();
    res.json(protocoles);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.getProtocoleById = async (req, res) => {
  try {
    const protocole = await protocoleService.getProtocoleById(req.params.id);
    if (!protocole) {
      return res.status(404).json({ message: 'Protocole non trouvé' });
    }
    res.json(protocole);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.updateProtocole = async (req, res) => {
  try {
    const protocole = await protocoleService.updateProtocole(req.params.id, req.body);
    if (!protocole) {
      return res.status(404).json({ message: 'Protocole non trouvé' });
    }
    res.json(protocole);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProtocole = async (req, res) => {
  try {
    const protocole = await protocoleService.deleteProtocole(req.params.id);
    if (!protocole) {
      return res.status(404).json({ message: 'Protocole non trouvé' });
    }
    res.json({ message: 'Protocole supprimé' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};