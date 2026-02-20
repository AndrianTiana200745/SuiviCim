const express = require('express');
const router = express.Router();
const centreController = require('../controllers/centreController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, centreController.createCentre);
router.get('/', centreController.getAllCentres);
router.get('/:id', centreController.getCentreById);
router.put('/:id', authMiddleware, centreController.updateCentre);
router.delete('/:id', authMiddleware, centreController.deleteCentre);

module.exports = router;