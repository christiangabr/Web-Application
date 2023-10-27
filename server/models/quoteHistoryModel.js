const mongoose = require("mongoose");

const quoteHistorySchema = new mongoose.Schema({
  gallonsReq: Number,
  deliveryAddress: String,
  deliveryDate: String,
  suggestedPrice: Number,
  totalAmountDue: Number,
});

module.exports = mongoose.model("quoteHistory", quoteHistorySchema);
