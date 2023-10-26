const mongoose = require('mongoose');


const priceSchema = new mongoose.Schema({
  email: String,
  gallonsReq: Number,
  deliveryAddress: String,
  deliveryDate: String,
  suggestedPrice: Number,
  totalAmountDue: Number,
})

module.exports = mongoose.model("price", priceSchema)