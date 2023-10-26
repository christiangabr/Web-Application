const mongoose = require('mongoose');

const fuelPriceSchema = new mongoose.Schema({
    price: {
    type: Number,
    default: 3.99
  }
});

const fuelPrice = mongoose.model('fuelPrice', fuelPriceSchema);

module.exports = fuelPrice;
