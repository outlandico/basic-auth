const express = require('express');
const app = express();
const signupRoute = require('./src/auth/routes-handlers/signupRoute');
const signinRoute = require('./src/auth/routes-handlers/signinRoute'); // Import the sign-in route handler

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', signupRoute); // Mount the signup route
app.use('/api/auth', signinRoute); // Mount the signin route

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
