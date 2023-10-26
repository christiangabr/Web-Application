<<<<<<< HEAD
const express = require('express');
const { checkProfile } = require('../Controllers/profile');

const router = express.Router();


router.get('/', checkProfile)


=======
const express = require('express');
const { checkProfile } = require('../Controllers/profile')

const router = express.Router();


router.get('/', checkProfile)




>>>>>>> fff459d (db patch update)
module.exports = router;