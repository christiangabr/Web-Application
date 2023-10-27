const User = require("../models/userModel");
const dotenv = require('dotenv');
dotenv.config();


const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

const signup = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.signup(email, password)
    
    const token = createToken(user._id)
    
    res.status(200).json({email, token})
    
    
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const login = async (req,res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a toekn
    const token = createToken(user._id)
    res.status(200).json({email, token})

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const getUser = async (req,res,next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user)
  } catch (err) {
    next(err);
  }
};



module.exports = { signup, login, getUser };





