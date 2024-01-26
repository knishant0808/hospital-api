const mongoose = require('mongoose');

/**
 * Connects to the MongoDB database using Mongoose.
 * NOTE: In a production environment, the MongoDB URI should not be hardcoded.
 * It should be stored in an environment variable for security purposes.
 */
const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB database
        await mongoose.connect('mongodb+srv://knishant0808:3JAqr1X824YjwcLl@cluster0.8dz6bvr.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Log a success message on successful connection
        console.log('MongoDB connected');
    } catch (error) {
        // Log an error message if the connection fails and exit the process
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
