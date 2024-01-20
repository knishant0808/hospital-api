const Patient = require('../../models/patient');
const Report = require('../../models/report');

const createReport = async (req, res) => {
    const { status } = req.body;
    const patientId = req.params.id;
    const doctorId = req.user.id;

    try {
        const patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({
                error: 'Patient not found'
            });
        }
        const report = new Report({
            doctor: doctorId,
            patient: patientId,
            status
        });
        await report.save();
        res.status(201).json({
            message: 'Report created successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

module.exports = {
    createReport
};