const express = require('express');
const { signup, login } = require('../Controllers/user')

const router = express.Router();


router.post('/login', login)
router.post('/signup', signup)

module.exports = router;