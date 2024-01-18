const express = require('express');
const doctorController = require('../../controllers/api/doctorController');
const router = express.Router();

// Register route
router.post('/register', doctorController.registerDoctor);

// Login route
router.post('/login', doctorController.loginDoctor);

module.exports = router;
