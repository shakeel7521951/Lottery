const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  lotteryId: { 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true, 
  },
  id: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  countryName: {
    type: String,
    required: true
  },
  pirce: {
    type: String,
    required: true
  },
  closeTime: {
    type: String,
    required: true
  },
  price_per_share: {
    type: Number,
    required: true
  }
});

const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);

module.exports = Cart;
