const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true 
  },
  fullName: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50
  },
  address1: {
    type: String,
    required: true,
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
    required: true,
    minLength: 1,
    maxLength: 100
  },
  state: {
    type: String,
    required: true,
    match: /^[A-Z]{2}$/
  },
  zipCode: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 9
  }
})


module.exports = mongoose.model("profile", profileSchema)


