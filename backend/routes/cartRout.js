const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cart = require('../models/cartM.js');


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

//add to cart
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

//edit cart
router.put('/:userId/item/:productId', async (req, res) => {
    const { quantity } = req.body;
    try {
        const cart = await Cart.findOne({ user: req.params.userId });
        if (!cart) return res.status(404).send('Cart not found');
        const item = cart.items.find(item => item.product.toString() === req.params.productId);
        if (!item) return res.status(404).send('Product not in cart');
        item.quantity = quantity;
        cart.updatedAt = Date.now();
        await cart.save();
        // Re-fetch with populate AFTER saving
        const updatedCart = await Cart.findById(cart._id).populate('items.product');
        res.json(updatedCart);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// router.delete('/:userId/item/:productId', async (req, res) => {
//     try {
//         const cart = await Cart.findOne({ user: req.params.userId }).populate('items.product');;
//         if (!cart) return res.status(404).send('Cart not found');
//         cart.items = cart.items.filter(item => item.product.toString() !== req.params.productId);
//         cart.updatedAt = Date.now();
//         await cart.save();
//         res.json(cart);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

//delete item from the cart
router.delete('/:userId/item/:productId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.params.userId });
        if (!cart) return res.status(404).send('Cart not found');
        //Compare item.product as string IDs
        cart.items = cart.items.filter(
            item => item.product.toString() !== req.params.productId
        );
        cart.updatedAt = Date.now();
        await cart.save();
        //Re-fetch with populate to return correct format
        const updatedCart = await Cart.findById(cart._id).populate('items.product');
        res.json(updatedCart);
    } catch (err) {
        res.json({ message: err.message });
    }
});


module.exports = router; 
