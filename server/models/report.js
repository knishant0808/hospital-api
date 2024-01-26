const mongoose = require('mongoose');

// Define a schema for the Report model
const reportSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId, // Reference to a Doctor's ObjectId
        ref: 'Doctor', // Indicates the reference to the Doctor model
        required: true // Field is required
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId, // Reference to a Patient's ObjectId
        ref: 'Patient', // Indicates the reference to the Patient model
        required: true // Field is required
    },
    status: {
        type: String,
        enum: ['negative', 'travelled-quarantine', 'symptoms-quarantine', 'positive-admit'],    // Enum restricts the value to one of these options
        required: true // Status field is required
    },
    date: {
        type: Date,
        default: Date.now // Default value for date is the current date/time
    }
});

// Create a Mongoose model from the schema
const Report = mongoose.model('Report', reportSchema);

// Export the Report model
module.exports = Report;
