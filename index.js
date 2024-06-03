const express = require('express');
const cors = require('cors');
const app = express();
const signupRoute = require('./src/auth/routes-handlers/signupRoute');
const signinRoute = require('./src/auth/routes-handlers/signinRoute');
const path = require('path');

// Enable CORS for all origins
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/auth', signupRoute); // Mount the signup route
app.use('/api/auth', signinRoute); // Mount the signin route

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
