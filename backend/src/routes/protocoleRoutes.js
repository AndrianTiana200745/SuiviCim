const express = require('express');
const router = express.Router();
const protocoleController = require('../controllers/protocoleController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, protocoleController.createProtocole);
router.get('/', authMiddleware, protocoleController.getAllProtocoles);
router.get('/:id', authMiddleware, protocoleController.getProtocoleById);
router.put('/:id', authMiddleware, protocoleController.updateProtocole);
router.delete('/:id', authMiddleware, protocoleController.deleteProtocole);

module.exports = router;