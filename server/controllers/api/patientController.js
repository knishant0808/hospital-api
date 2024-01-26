const Patient = require('../../models/patient');

/**
 * Registers a new patient.
 * 
 * @param req - The request object containing the patient's details.
 * @param res - The response object.
 */
const registerPatient = async (req, res) => {
    const { name, age, gender, contact, address } = req.body;
    const doctorId = req.user.id;  // Extract the doctor's ID from the request

    try {
        // Check if a patient with the same contact already exists
        let patient = await Patient.findOne({ contact });
        if (patient) {
            // If patient exists, return a success response with patient info
            return res.status(200).json({
                message: 'Patient already exists',
                patient
            });
        }

        // Create a new patient instance
        patient = new Patient({ name, age, gender, contact, address, doctor: doctorId });

        // Save the new patient to the database
        await patient.save();

        // Return a success response for successful registration
        res.status(201).json({ message: 'Patient registered successfully' });
    } catch (error) {
        // Handle any errors during the process
        res.status(500).json({ error: error.message });
    }
};

// Export the registerPatient function
module.exports = { registerPatient };
