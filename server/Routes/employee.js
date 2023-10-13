const express = require('express');
const { register, login } = require('../Controllers/employee')

const router = express.Router;


router.post('/register', register)
      .post('/login', login)

module.export = router;