const jwt = require('jsonwebtoken');
const Doctor = require('../../models/doctor');

/**
 * Registers a new doctor.
 * 
 * @param req - The request object containing the doctor's details.
 * @param res - The response object.
 */
const registerDoctor = async (req, res) => {
    const { name, experience, contact, username, password } = req.body;

    try {
        // Check if a doctor with the same username already exists
        const existingDoctor = await Doctor.findOne({ username });
        if (existingDoctor) {
            return res.status(400).json({ error: 'Doctor with this username already exists' });
        }

        // Create a new doctor instance
        const doctor = new Doctor({ name, experience, contact, username, password });

        // Save the new doctor to the database
        await doctor.save();

        res.status(201).json({ message: 'Doctor registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Handles doctor login.
 * 
 * @param req - The request object containing the login credentials.
 * @param res - The response object.
 */
const loginDoctor = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Authenticate the doctor
        const doctor = await Doctor.findOne({ username, password });
        if (!doctor) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate a JWT token for the session
        const payload = { id: doctor._id, username: doctor.username };
        const token = jwt.sign(payload, 'secret_key', { expiresIn: '1h' });

        res.status(200).json({ message: 'Logged in successfully', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Export the controller functions
module.exports = { registerDoctor, loginDoctor };
