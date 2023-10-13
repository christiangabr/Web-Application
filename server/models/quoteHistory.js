const mongoose = require('mongoose');

const quoteHistorySchema = new mongoose.Schema ({
  id: Number,
  email: String,
  qH: [{
    deliveryDate: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipCode: String,
    gallonsReq: Number,
    priceperGallon: Number,
    totalAmount: Number
  }]
})

module.exports = mongoose.model("qHS", quoteHistorySchema);
