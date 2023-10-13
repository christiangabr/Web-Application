const profile = require('../models/Profile');


const checkProfile = async (req,res,next) => {
  try {  
    const newProfile = new User({
      email: req.body.email,
      fullName: req.body.fullName,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode 
    })
    await newProfile.save();
    res.status(200).send("Profile has been created.");
  } catch(err) {
    err.log("profile error");
  }
}

module.exports = checkProfile;