const express = require('express');
const passport = require('passport');
const router = express.Router();

// Import controllers
const patientController = require('../../controllers/api/patientController');
const reportController = require('../../controllers/api/reportController');

// Route to register a patient
// Uses Passport for authentication with JWT (JSON Web Token)
// POST request to '/register' is handled by registerPatient method from patientController
router.post('/register', passport.authenticate('jwt', { session: false }), patientController.registerPatient);

// Route to create a report for a specific patient
// Uses Passport for authentication with JWT
// POST request to '/:id/create_report' is handled by createReport method from reportController
// ':id' in the path is a placeholder for the patient's ID
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), reportController.createReport);

// Route to retrieve all reports for a specific patient
// Uses Passport for authentication with JWT
// GET request to '/:id/all_reports' is handled by allReports method from reportController
// ':id' in the path is a placeholder for the patient's ID
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), reportController.allReports);

// Export the router for use in other parts of the application
module.exports = router;
