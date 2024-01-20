const express = require('express');
const router = express.Router();
const passport = require('passport');

const patientController = require('../../controllers/api/patientController');
const reportController = require('../../controllers/api/reportController');

// Protect the route with Passport JWT
router.post('/register', passport.authenticate('jwt', { session: false }), patientController.registerPatient);

router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), reportController.createReport);

router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), reportController.allReports);

module.exports = router;
