const Patient = require('../../models/patient');
const Report = require('../../models/report');

/**
 * Creates a medical report for a patient.
 * 
 * @param req - The request object containing report details.
 * @param res - The response object.
 */
const createReport = async (req, res) => {
    const { status } = req.body;
    const patientId = req.params.id;
    const doctorId = req.user.id;

    try {
        // Check if the patient exists
        const patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        // Create a new report
        const report = new Report({ doctor: doctorId, patient: patientId, status });
        await report.save();

        res.status(201).json({ message: 'Report created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Retrieves all reports for a specific patient.
 * 
 * @param req - The request object with the patient's ID.
 * @param res - The response object.
 */
const allReports = async (req, res) => {
    const patientId = req.params.id;

    try {
        // Fetch all reports for the patient, sorted by date
        const reports = await Report.find({ patient: patientId }).sort({ date: 1 });
        if (!reports || reports.length === 0) {
            return res.status(404).json({ message: 'No reports found for this patient' });
        }

        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Retrieves all reports based on their status.
 * 
 * @param req - The request object with the status parameter.
 * @param res - The response object.
 */
const statusReports = async (req, res) => {
    const status = req.params.status;

    try {
        // Fetch all reports with the given status, sorted by date
        const reports = await Report.find({ status }).sort({ date: 1 });
        if (!reports || reports.length === 0) {
            return res.status(404).json({ message: 'No reports found for this status' });
        }

        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Export the controller functions
module.exports = { createReport, allReports, statusReports };
