const qH = require("../models/quoteHistory");


const postFromBackend = (req,res) => {
  const testHistory = new qH({
    gallonsReq: 16,
    deliveryAddress: "fall123",
    deliveryDate: "10/8/2023",
    suggestedPrice: 80,
    totalAmountDue: 100
  })
  // res.json({"gallonsReq": 16, "deliveryAddress": "fall123", "deliveryDate": "10/8/2023", "suggestedPrice": 80, "totalAmountDue": 100})
  res.json(testHistory)
}


module.exports = { postFromBackend };