const express = require('express');
const router = express.Router();
const operateurSaisieController = require('../controllers/operateurSaisieController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, operateurSaisieController.createOperateurSaisie);
router.get('/', authMiddleware, operateurSaisieController.getAllOperateurSaisies);
router.get('/:id', authMiddleware, operateurSaisieController.getOperateurSaisieById);
router.put('/:id', authMiddleware, operateurSaisieController.updateOperateurSaisie);
router.delete('/:id', authMiddleware, operateurSaisieController.deleteOperateurSaisie);

module.exports = router;