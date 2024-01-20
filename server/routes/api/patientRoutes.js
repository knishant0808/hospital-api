const express = require('express');
const router = express.Router();
const passport = require('passport');
const patientController = require('../../controllers/api/patientController');

// Protect the route with Passport JWT
router.post('/register', passport.authenticate('jwt', { session: false }), patientController.registerPatient);

module.exports = router;
