const mongoose = require('mongoose');


const priceSchema = new mongoose.Schema({
  price: {
    type: Number,
    default: 3.99
 }, { timestamps: true})

module.exports = mongoose.model("price", priceSchema)
