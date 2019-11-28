const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @desc   Get all users contacts
// @access Private
router.post('/', (req, res) => {
	res.send('Get all contacts');
});
// @route  POST api/users
// @desc   Register a user
// @access Public
router.post('/', (req, res) => {
	res.send('Register a user');
});
// @route  POST api/users
// @desc   Register a user
// @access Public
router.post('/', (req, res) => {
	res.send('Register a user');
});
// @route  POST api/users
// @desc   Register a user
// @access Public
router.post('/', (req, res) => {
	res.send('Register a user');
});

module.exports = router;
