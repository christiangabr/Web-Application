const mongoose = require('mongoose')
const pM = require("../models/priceModuleModel");

// get all prices
const getPrices = async (req, res) => {
  const user_id = req.user._id

  const prices = await pM.find({user_id}).sort({createdAt: -1})

  res.status(200).json(prices)
}

// get a single price
const getPrice = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such price'})
  }

  const price = await pM.findById(id)

  if (!price) {
    return res.status(404).json({error: 'No such price'})
  }
  
  res.status(200).json(price)
}


// create new price
const createPrice = async (req, res) => {
  const {gallonsReq, deliveryAddress, deliveryDate, suggestedPrice, totalAmountDue} = req.body

  let emptyFields = []

  if(!gallonsReq) {
    emptyFields.push('gallonsReq')
  }
  if(!deliveryAddress) {
    emptyFields.push('deliveryAddress')
  }
  if(!deliveryDate) {
    emptyFields.push('deliveryDate')
  }
  if(!suggestedPrice) {
    emptyFields.push('suggestedPrice')
  }
  if(!totalAmountDue) {
    emptyFields.push('totalAmountDue')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  try {
    const user_id = req.user._id
    const price = await pM.create({gallonsReq, deliveryAddress, deliveryDate, suggestedPrice, totalAmountDue, user_id})
    res.status(200).json(price)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete price
const deletePrice= async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such price'})
  }

  const price = await pM.findOneAndDelete({_id: id})

  if (!price) {
    return res.status(400).json({error: 'No such price'})
  }

  res.status(200).json(price)
}

// update price
const updatePrice= async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such price'})
  }

  const price = await pM.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!price) {
    return res.status(400).json({error: 'No such price'})
  }

  res.status(200).json(price)
}


module.exports = {
  getPrices,
  getPrice,
  createPrice,
  deletePrice,
  updatePrice
}