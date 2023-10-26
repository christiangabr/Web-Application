const profile = require('../models/profileModel');

const checkProfile = async (req,res,next) => {
  try {  
    const newProfile = new profile({
      email: "john@io.com",
      fullName: "John Dee",
      address1: "fall123",
      address2: "fall123",
      city: "Houston",
      state: "TX",
      zipCode: "77204"

    })
    res.json(newProfile)
  } catch(err) {
    next(err)
  }
}

module.exports = { checkProfile };