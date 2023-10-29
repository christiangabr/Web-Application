const express = require('express');
const { createProfile, getProfiles, getProfile, deleteProfile, patchProfile} = require('../Controllers/profileController');
const router = express.Router();


//router.get('/', checkProfile)

// GET all profiles
router.get('/', getProfiles)

// GET a single profile
router.get('/:id', getProfile)

// POST a new profile
router.post('/', createProfile)

// DELETE a new profile
router.delete('/:id', deleteProfile)

// PATCH a new profile
router.patch('/:id', patchProfile)

module.exports = router;

/*const express = require("express");
const {
  getProfiles,
  getProfile,
  createProfile,
  deleteProfile,
  updateProfile
} = require("../Controllers/profileController");

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();


router.use(requireAuth)

// GET all profiles
router.get('/', getProfiles)

//GET a single profile
router.get('/:id', getProfile)

// POST a new profile
router.post('/', createProfile)

// DELETE a profile
router.delete('/:id', deleteProfile)

// UPDATE a profile
router.patch('/:id', updateProfile)


module.exports = router*/