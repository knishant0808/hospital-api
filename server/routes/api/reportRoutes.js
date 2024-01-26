const express = require('express');
const passport = require('passport');
const router = express.Router();

// Import the report controller
const reportController = require('../../controllers/api/reportController');

// Route to get reports based on their status
// Uses Passport for JWT authentication (no session)
// GET request to '/:status' is handled by statusReports method in reportController
// ':status' in the path is a placeholder for the report status
router.get('/:status', passport.authenticate('jwt', { session: false }), reportController.statusReports);

// Export the router for use in other parts of the application
module.exports = router;
