const express = require('express');
const router = express.Router();
const passport = require('passport');

const patientController = require('../../controllers/api/patientController');
const reportController = require('../../controllers/api/reportController');

// Protect the route with Passport JWT
router.post('/register', passport.authenticate('jwt', { session: false }), patientController.registerPatient);

router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), reportController.createReport);

module.exports = router;
