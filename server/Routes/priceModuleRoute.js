const express = require('express');
const { pricefromBackEnd } = require('../Controllers/priceModule')

const router = express.Router();


router.get('/', pricefromBackEnd)


module.exports = router;