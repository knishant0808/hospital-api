const mongoose = require('mongoose');

// Define a schema for the Patient model
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Name field is required
    },
    age: {
        type: Number,
        required: true, // Age field is required
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], // Enum restricts the value to one of these options
        required: true, // Gender field is required
    },
    contact: {
        type: String,
        required: true, // Contact field is required
    },
    createdAt: {
        type: Date,
        default: Date.now // Default value for createdAt is the current date/time
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId, // References a Doctor model's ObjectId
        ref: 'Doctor' // Indicates the reference to the Doctor model
    }
});

// Create a Mongoose model from the schema
const Patient = mongoose.model('Patient', patientSchema);

// Export the Patient model
module.exports = Patient;
