const mongoose = require('mongoose');

// Define a schema for the Doctor model
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // name field is required
    },
    experience: {
        type: Number,
        required: true, // experience field is required
    },
    contact: {
        type: String,
        required: true, // contact field is required
    },
    username: {
        type: String,
        required: true, // username field is required
    },
    password: {
        type: String,
        required: true, // password field is required
    },
    createdAt: {
        type: Date,
        default: Date.now // default value for createdAt is the current date/time
    }
});

// Create a Mongoose model from the schema
const Doctor = mongoose.model('Doctor', doctorSchema);

// Export the Doctor model
module.exports = Doctor;
