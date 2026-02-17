const express = require('express');
const router = express.Router();
const operationController = require('../controllers/operationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, operationController.createOperation);
router.get('/', authMiddleware, operationController.getAllOperations);
router.get('/:id', authMiddleware, operationController.getOperationById);
router.put('/:id', authMiddleware, operationController.updateOperation);
router.delete('/:id', authMiddleware, operationController.deleteOperation);

module.exports = router;