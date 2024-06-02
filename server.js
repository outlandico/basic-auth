const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();

// Enable CORS for all origins
app.use(cors());

// Other middleware
app.use(express.json()); // Example: JSON parsing middleware

// Routes
app.use('/api/auth', require('./src/auth/routes-handlers/signupRoute')); // Mount the signup route
app.use('/api/auth', require('./src/auth/routes-handlers/signinRoute')); // Mount the signin route

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
