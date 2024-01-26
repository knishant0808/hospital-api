// Import necessary modules
const express = require('express'); // Express framework for building web applications
const path = require('path'); // Path module for handling and transforming file paths
const bodyParser = require('body-parser'); // Body-parser middleware to parse incoming request bodies

// Import custom modules for database connection and authentication
const connectDB = require('./server/config/db'); // Module for connecting to the database
const passport = require('./server/config/passport-jwt-strategy'); // Passport module with JWT strategy for authentication

// Establish a connection to the database
connectDB();

// Initialize the Express application
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

// Initialize passport for authentication
app.use(passport.initialize());

// Define API routes
// When a request path starts with '/api', use the routes defined in indexRoutes
app.use('/api', require('./server/routes/api/indexRoutes'));

// Define the port number on which the server will listen
const port = 5200;

// Start the server and listen on the specified port
// Log a message to the console when the server starts
app.listen(port, () => console.log(`Server running on port ${port}`));
