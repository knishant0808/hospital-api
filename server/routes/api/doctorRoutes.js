const express = require('express');
const router = express.Router();
const doctorController = require('../../controllers/api/doctorController');

// Route for doctor registration
// POST request to '/register' is handled by registerDoctor method from doctorController
router.post('/register', doctorController.registerDoctor);

// Route for doctor login
// POST request to '/login' is handled by loginDoctor method from doctorController
router.post('/login', doctorController.loginDoctor);

// Export the router for use in other parts of the application
module.exports = router;
