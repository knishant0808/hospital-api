const Patient = require('../../models/patient');

const registerPatient = async (req, res) => {
    const { name, age, gender, contact, address } = req.body;
    const doctorId = req.user.id;

    try {
        let patient = await Patient.findOne({ contact });
        if (patient) {
            return res.status(200).json({
                message: 'Patient already exists',
                patient
            });
        }
        patient = new Patient({
            name,
            age,
            gender,
            contact,
            address,
            doctor: doctorId
        });
        await patient.save();
        res.status(201).json({
            message: 'Patient registered successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = {
    registerPatient
};
