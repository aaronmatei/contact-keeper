const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @desc   Get all users contacts
// @access Private
router.get('/', (req, res) => {
	res.send('Get all contacts');
});
// @route  POST api/contacts
// @desc   Add new Contact
// @access Private
router.post('/', (req, res) => {
	res.send('Add a new contact');
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
