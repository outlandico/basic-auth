const express = require('express');
const app = express();
const signupRoute = require('./src/auth/routes-handlers/signupRoute'); // Adjust the path accordingly

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', signupRoute); // Mount the signup route

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


