const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  input: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
