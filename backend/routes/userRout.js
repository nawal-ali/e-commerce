const express = require('express');
const router = express.Router();
const { User } = require('../models/userM');
const auth = require('../middleware/auth');

// Get a user by ID (excluding password)
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id); // exclude password
        if (!user) {
            return res.json({ message: 'User not found' }).select('-password');
        }
        res.json({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            // password: user.password
        });
    } catch (err) {
        res.json({ message: 'Invalid user ID or server error' });
    }
});

//get logged user id
router.get('/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;