const mongoose = require('mongoose');


const priceSchema = new mongoose.Schema({
  gallonsReq: {
    type: Number,
    required: true
  },
  deliveryAddress: {
    type: String,
    required: true
  },
  deliveryDate: {
   type: String,
   required: true 
  },
  suggestedPrice: {
    type: Number,
    required: true
  },
  totalAmountDue: {
    type: Number,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true})

module.exports = mongoose.model("price", priceSchema)