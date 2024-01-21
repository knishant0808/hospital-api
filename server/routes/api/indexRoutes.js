const express = require('express');
const router = express.Router();

// Use doctorRoutes
const doctorRoutes = require('./doctorRoutes');
router.use('/doctor', doctorRoutes);

// Use patientRoutes
const patientRoutes = require('./patientRoutes');
router.use('/patient', patientRoutes);

// Use reportRoutes
const reportRoutes = require('./reportRoutes');
router.use('/report', reportRoutes);


module.exports = router;
