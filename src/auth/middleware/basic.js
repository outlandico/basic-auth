const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users-model');

exports.signup = async (req, res) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // Create a new user
    const user = await User.create({
      username: req.body.username,
      password: hashedPassword,
    });
    // Send a success response
    res.status(201).json({ data: user });
  } catch (error) {
    // Send an error response if something goes wrong
    console.error('Error creating user:', error);
    res.status(400).json({ error: 'User creation failed' });
  }
};
