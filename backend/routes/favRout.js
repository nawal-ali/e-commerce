const express = require('express');
const router = express.Router();
const Favorite = require('../models/favM');

//Add to favorites
router.post('/', async (req, res) => {
    const { userId, productId } = req.body;
    try {
        const exists = await Favorite.findOne({ userId, productId });
        if (!exists) {
            await Favorite.create({ userId, productId });
        }
        res.json({ success: true });
    } catch (err) {
        res.json({ error: 'Failed to add to favorites' });
    }
});

//Remove from favorites
router.delete('/:productId', async (req, res) => {
    const { userId } = req.query;
    const { productId } = req.params;
    try {
        await Favorite.deleteOne({ userId, productId });
        res.json({ success: true });
    } catch (err) {
        res.json({ error: 'Failed to remove favorite' });
    }
});

//Get all favorites
router.get('/', async (req, res) => {
    const { userId } = req.query;
    try {
        const favorites = await Favorite.find({ userId }).populate('productId');;
        res.json({ data: favorites });
    } catch (err) {
        res.json({ error: 'Failed to fetch favorites' });
    }
});

module.exports = router;
