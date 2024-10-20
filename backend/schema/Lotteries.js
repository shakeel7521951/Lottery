const mongoose = require('mongoose');

const countryTicketSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  catgory: {
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
  remaining_shares: {
    type: Number,
    required: true
  },
  total_shares: {
    type: Number,
    required: true
  },
  games: {
    type: Number,
    required: true
  },
  price_per_share: {
    type: Number,
    required: true
  },
  quick_play: {
    type: Number,
    required: true
  }
});

const Lotteries  = mongoose.model('Lotterie', countryTicketSchema);

module.exports = Lotteries;
