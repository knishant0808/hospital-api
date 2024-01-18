const jwt = require('jsonwebtoken');

const Doctor = require('../../models/doctor');

// Register logic API for doctors
const registerDoctor = async (req, res) => {
    const { name, experience, contact, username, password } = req.body;

    try {
        // Check if the record already exists based on username
        const existingDoctor = await Doctor.findOne({ username });
        if (existingDoctor) {
            return res.status(400).json({ error: 'Doctor with this username already exists' });
        }

        // Create a new doctor instance
        const doctor = new Doctor({
            name,
            experience,
            contact,
            username,
            password,
        });

        // Save the doctor in the database
        await doctor.save();

        res.status(201).json({ message: 'Doctor registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const loginDoctor = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the doctor by username
        const doctor = await Doctor.findOne({ username, password });
        if (!doctor) {
            return res.status(401).json({ error: 'Invalid credentials' }); // 401 Unauthorized
        }

        // Create a token
        const payload = { id: doctor._id, username: doctor.username };
        const token = jwt.sign(payload, 'secret_key', { expiresIn: '1h' }); // Token expiry set to 1 hour

        res.status(200).json({ message: 'Logged in successfully', token }); // 200 OK
    } catch (error) {
        res.status(500).json({ error: error.message }); // 500 Internal Server Error
    }
};



module.exports = {
    registerDoctor,
    loginDoctor
};
