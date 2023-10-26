const profile = require('../models/profileModel');


const checkProfile = async (req,res,next) => {
  try {  
    const newProfile = new profile({
<<<<<<< HEAD
      email: "helloworld@gmail.com",
      fullName: "King Kenny",
      address1: "123 Elm Street",
      address2: "123 Elm Street",
      city: "Houston",
      state: "TX",
      zipCode: "77777" 
=======
      email: "john@io.com",
      fullName: "John Dee",
      address1: "fall123",
      address2: "fall123",
      city: "Houston",
      state: "TX",
      zipCode: "77204"

>>>>>>> fff459d (db patch update)
    })
    res.json(newProfile)
  } catch(err) {
    next(err)
  }
}

<<<<<<< HEAD


module.exports = {checkProfile};
=======
module.exports = { checkProfile };
>>>>>>> fff459d (db patch update)
