const express = require('express');
const { postFromBackend } = require('../Controllers/quoteHistory')

const router = express.Router();


router.get('/', postFromBackend)




module.exports = router;