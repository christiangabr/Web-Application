const express = require('express');
const { signup, login, getUser } = require('../Controllers/user')

const router = express.Router();

// Post Data
router.post('/login', login)
router.post('/signup', signup)


module.exports = router;