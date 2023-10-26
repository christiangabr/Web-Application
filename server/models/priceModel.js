const mongoose = require('mongoose');

const fuelPriceSchema = new mongoose.Schema({
    price: {
    type: Number,
    required: true,
  }
});

const fuelPrice = mongoose.model('fuelPrice', fuelPriceSchema);

module.exports = fuelPrice;
