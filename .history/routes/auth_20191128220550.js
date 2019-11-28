const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route  GET api/auth
// @desc   Get logged in user
// @access Private
router.get(
	'/',
	[check('email', 'Please enter a valid email').isEmail(), check('password', 'Password is required').exists()],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { email, password } = req.body;
		try {
		} catch (err) {}
	}
);

// @route  POST api/auth
// @desc   Auth user and get token
// @access Public
router.post('/', (req, res) => {
	res.send('Login User');
});

module.exports = router;
