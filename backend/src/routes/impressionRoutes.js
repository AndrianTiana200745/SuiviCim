const express = require('express');
const router = express.Router();
const impressionController = require('../controllers/impressionController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, impressionController.createImpression);
router.get('/', authMiddleware, impressionController.getAllImpressions);
router.get('/:id', authMiddleware, impressionController.getImpressionById);
router.put('/:id', authMiddleware, impressionController.updateImpression);
router.delete('/:id', authMiddleware, impressionController.deleteImpression);

module.exports = router;