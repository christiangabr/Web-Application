const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const validator = require('validator');
const fuelQuoteSchema = new mongoose.Schema({
  gallonsReq: Number,
  deliveryAddress: String,
  deliveryDate: String,
  suggestedPrice: Number,
  totalAmountDue: Number
});
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: false,
    minLength: 1,
    maxLength: 100
  },
  address2: {
    type: String,
    required: false,
    minLength: 1,
    maxLength: 100
  },
  city: {
    type: String,
    required: false,
    minLength: 1,
    maxLength: 100
  },
  state: {
    type: String,
    required: false,
    match: /^[A-Z]{2}$/
  },
  zipCode: {
    type: String,
    required: false,
    minLength: 5,
    maxLength: 9
  },
  fuelQuotes: [fuelQuoteSchema]
}, {timestamps: true});


// static signup method
userSchema.statics.signup = async function (name, email, password) {

  if (!name && !email && !password) {
    throw Error('All fields must be filled')
  }

  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password is not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already exist')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({name, email, password: hash})
  
  return user
}

// static login method
userSchema.statics.login = async function(email, password) {

  if (!email && !password) {
    throw Error('All fields must be filled in')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error('Incorrect Email')
  }

  // return true/false, compare input password with db password
  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error('Incorrect password')
  }

  return user

}


module.exports  = mongoose.model("User", userSchema);


