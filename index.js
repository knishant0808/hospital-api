const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const connectDB = require('./server/config/db');

connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use the API routes when path starts with /api
app.use('/api', require('./server/routes/api/indexRoutes'));

// Define the port the server will listen on
const port = 5200;

// Start the server and log a message to the console
app.listen(port, () => console.log(`Server running on port ${port}`));