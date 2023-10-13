const Employee = require("../models/Employee");

const register = (req, res) => {
  Employee.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
};

const login = (req, res) => {
  const { email, password } = req.body;
  Employee.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success!");
      } else {
        res.json("The password is incorrect.");
      }
    } else {
      res.json("That email is not registered.");
    }
  });
};

module.exports = { register, login };
