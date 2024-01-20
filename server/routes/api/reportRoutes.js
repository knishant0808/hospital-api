const express = require('express');
const router = express.Router();    
const passport = require('passport');

const reportController = require('../../controllers/api/reportController');

// Protect the route with Passport JWT
router.get('/:status', passport.authenticate('jwt', { session: false }), reportController.statusReports);

module.exports = router;