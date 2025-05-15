const express = require('express');
const router = express.Router();
const Order = require('../models/orderM');

// Create new order
router.post('/', async (req, res) => {
    const { userId, items, totalAmount } = req.body;

    try {
        const order = new Order({
            user: userId,
            items,
            totalAmount
        });

        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all orders for a user

// router.post('/', async (req, res) => {
//     const { userId, items, totalAmount } = req.body;

//     try {
//         // Ensure each item only includes expected fields
//         const formattedItems = items.map(item => ({
//             productName: item.productName,
//             quantity: item.quantity,
//             price: item.price
//         }));

//         const order = new Order({
//             user: userId,
//             items: formattedItems,
//             totalAmount
//         });

//         const savedOrder = await order.save();
//         res.status(201).json(savedOrder);
//     } catch (err) {
//         console.error('Order save error:', err);
//         res.status(400).json({ message: err.message });
//     }
// });


router.get('/:userId', async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId }).sort({ createdAt: -1 });
        if (orders.length === 0) {
            return res.json({ message: 'There is no previous orders!' })
        }
        res.json(orders)
            ;
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
