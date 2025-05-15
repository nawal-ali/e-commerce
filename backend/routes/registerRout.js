const express = require('express');
const router = express.Router();
const { User, validateCreateUser } = require('../models/userM.js')


// to get all users registered
router.get('/allusers', async (req, res) => {
    try {
        const allUsers = await User.find()
        res.json({ action: 'success', count: allUsers.length, data: allUsers })
    } catch (err) {
        res.json({ message: err.message })
    }
})

// router.get('/:id', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id).select('-password');
//         res.json({
//             id: user._id,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             email: user.email
//         });
//     } catch (err) {
//         res.json({ message: err.message })
//     }
// })


//to register 
router.post('/sign-up', async (req, res) => {
    const { error } = validateCreateUser(req.body)
    if (error) {
        res.json({ message: error.details[0].message })
    }
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.json({ message: 'this email is already used' })
    }
    user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    })
    try {
        const newUser = await user.save();
        // Do NOT send password back to client
        const { _id, firstName, lastName, email } = newUser;
        res.json({
            user: { _id, firstName, lastName, email }
        });
    } catch (err) {
        res.json({ message: err.message });
        // try {
        //     const newUser = await user.save()
        //     res.json(newUser)
        // } catch (err) {
        //     res.json({ message: err.message })
        // }
    }
})
module.exports = router;
