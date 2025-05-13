const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cart = require('../models/cartM.js');


//add to cart
// router.post('/add', async (req, res) => {
//     const { userId, productId, quantity } = req.body;
//     let cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//         cart = new Cart({
//             user: userId,
//             items: [{ product: productId, quantity }]
//         });
//     } else {
//         const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
//         if (itemIndex > -1) {
//             cart.items[itemIndex].quantity += quantity;
//         } else {
//             cart.items.push({ product: productId, quantity });
//         }
//     }
//     await cart.save();
//     res.json(cart);
// });

router.post('/add', async (req, res) => {
    const { userId, productId, quantity } = req.body;

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
        cart = new Cart({
            user: userId,
            items: [{ product: productId, quantity }]
        });
    } else {
        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }
    }

    await cart.save();
    res.json(cart);
});

//get all cart 
router.get('/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.params.userId }).populate('items.product');
        if (!cart || cart.items.length === 0) {
            return res.json({ message: 'Cart is empty' });
        }
        res.json(cart);
    } catch (err) {
        res.json({ message: err.message });
    }
});

module.exports = router; 
