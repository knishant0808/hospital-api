const express = require('express');
const router = express.Router();

// Import routes for doctors, patients, and reports
const doctorRoutes = require('./doctorRoutes');
const patientRoutes = require('./patientRoutes');
const reportRoutes = require('./reportRoutes');

// Use the imported routes with the router
router.use('/doctor', doctorRoutes);
router.use('/patient', patientRoutes);
router.use('/report', reportRoutes);

// Export the configured router
module.exports = router;
