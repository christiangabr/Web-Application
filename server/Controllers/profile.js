const profile = require('../models/Profile');


const checkProfile = async (req,res,next) => {
  try {  
    const newProfile = new profile({
      email: "helloworld@gmail.com",
      fullName: "King Kenny",
      address1: "123 Elm Street",
      address2: "123 Elm Street",
      city: "Houston",
      state: "TX",
      zipCode: "77777" 
    })
    res.json(newProfile)
  } catch(err) {
    err.log("profile error");
  }
}



module.exports = {checkProfile};
