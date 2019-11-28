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
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) res.send(req.body);
	}
);

module.exports = router;
