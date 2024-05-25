const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { getUserDetails } = require('../controllers/userController');

// @route   GET api/user
// @desc    Get user details
router.get('/', auth, getUserDetails);

module.exports = router;