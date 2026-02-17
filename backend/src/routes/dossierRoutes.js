const express = require('express');
const router = express.Router();
const dossierController = require('../controllers/dossierController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, dossierController.createDossier);
router.get('/', authMiddleware, dossierController.getAllDossiers);
router.get('/:id', authMiddleware, dossierController.getDossierById);
router.put('/:id', authMiddleware, dossierController.updateDossier);
router.delete('/:id', authMiddleware, dossierController.deleteDossier);

module.exports = router;