const express = require('express');
const router = express.Router();
const controller = require('../controllers/strainController');

// Get random strains
router.get('/', controller.getRandomStrains);

// Search strain
router.get('/search', controller.searchStrain);

// Add strain to collection
router.get('/add', controller.addStrainToCollection);

// View collection
router.get('/collection', controller.viewCollection);

// Delete strain
router.get('/delete', controller.deleteStrain);

module.exports = router;

