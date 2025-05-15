const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    }
});

const Favorite = mongoose.model('favorite', favoriteSchema);
module.exports = Favorite;
// module.exports = mongoose.model('Favorite', Favorite);