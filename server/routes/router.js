const express = require('express');
const router = express.Router();
const User = require('../models/User'); // User model ko import karo
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken
require('dotenv').config(); // Make sure you have this line to load env variables


// Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ status: false, msg: 'User already exists' });
        }

        // Create new user
        user = new User({
            username,
            email,
            password: await bcrypt.hash(password, 10), // Password ko hash karo
        });

        await user.save();
        res.status(201).json({ status: true, msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: false, msg: 'Server error' });
    }
});




// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // JWT payload
        const payload = {
            user: {
                id: user.id,
            },
        };

        // Generate JWT token
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send token in response (or in a cookie)
        res.cookie('authToken', token, { httpOnly: true }); // Set the token in a cookie
        res.json({ msg: 'Login successful', token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});



router.get('/logout', (req, res) => {
    console.log('Logout route hit');
    res.clearCookie('authToken');  // Clear the cookie
    res.json({ status: true, msg: 'Logged out successfully' });
});

module.exports = router;
