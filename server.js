const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const path = require('path'); // Import the path module

// Enable CORS for all origins
app.use(cors());

// Other middleware
app.use(express.json()); // Example: JSON parsing middleware
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Routes
app.use('/api/auth', require('./src/auth/routes-handlers/signupRoute')); // Mount the signup route
app.use('/api/auth', require('./src/auth/routes-handlers/signinRoute')); // Mount the signin route

// Serve static files from the directory containing index.html
app.use(express.static('public'));


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
