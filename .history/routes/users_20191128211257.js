const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator/check');

// @route  POST api/users
// @desc   Register a user
// @access Public
router.post(
	'/',
	[
		check('name', 'Please add a name')
			.not()
			.isEmpty(),
		check('email', 'Please enter a valid email').isEmail(),
		check('password', 'Please enter a 6 character password').isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { name, email, password } = req.body;
		try {
		}
	}
);

module.exports = router;
