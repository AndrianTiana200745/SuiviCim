const express = require('express');
const router = express.Router();
const vehiculeController = require('../controllers/vehiculeController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, vehiculeController.createVehicule);
router.get('/', authMiddleware, vehiculeController.getAllVehicules);
router.get('/:id', authMiddleware, vehiculeController.getVehiculeById);
router.put('/:id', authMiddleware, vehiculeController.updateVehicule);
router.delete('/:id', authMiddleware, vehiculeController.deleteVehicule);

module.exports = router;