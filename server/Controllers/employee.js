const Employee = require("../models/Employee");


const postFromBackend = (req,res) => {
  res.json({"name": "John", "email": "john@io.com", "password": "kiwisplash123"})
}


module.exports = { postFromBackend };





