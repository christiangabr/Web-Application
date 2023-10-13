const express = require('express');
const { checkProfile } = require('../Controllers/profile');

const router = express.Router();


router.get('/', checkProfile)


module.exports = router;