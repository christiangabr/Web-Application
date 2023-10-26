const pM = require("../models/priceModuleModel");


const pricefromBackEnd = (req,res) => {
  const testPrice= new pM({
    gallonsReq: 16,
    deliveryAddress: "fall123",
    deliveryDate: "10/8/2023",
    suggestedPrice: 80,
    totalAmountDue: 100
  })
  // res.json({"gallonsReq": 16, "deliveryAddress": "fall123", "deliveryDate": "10/8/2023", "suggestedPrice": 80, "totalAmountDue": 100})
  res.json(testPrice)
}


module.exports = { pricefromBackEnd };