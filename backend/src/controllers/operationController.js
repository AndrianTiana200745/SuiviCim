const operationService = require('../services/operationService');

exports.createOperation = async (req, res) => {
  try {
    const operation = await operationService.createOperation(req.body);
    res.status(201).json(operation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllOperations = async (req, res) => {
  try {
    const operations = await operationService.getAllOperations();
    res.json(operations);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.getOperationById = async (req, res) => {
  try {
    const operation = await operationService.getOperationById(req.params.id);
    if (!operation) {
      return res.status(404).json({ message: 'Opération non trouvée' });
    }
    res.json(operation);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.updateOperation = async (req, res) => {
  try {
    const operation = await operationService.updateOperation(req.params.id, req.body);
    if (!operation) {
      return res.status(404).json({ message: 'Opération non trouvée' });
    }
    res.json(operation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteOperation = async (req, res) => {
  try {
    const operation = await operationService.deleteOperation(req.params.id);
    if (!operation) {
      return res.status(404).json({ message: 'Opération non trouvée' });
    }
    res.json({ message: 'Opération supprimée' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};