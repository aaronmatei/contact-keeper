const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Contact = require('../models/Contact');
const { check, validationResult } = require('express-validator/check');

// @route  GET api/contacts
// @desc   Get all users contacts
// @access Private
router.get('/', auth, (req, res) => {
	try {
		const contacts = await Contact.find({user:req.user.id}).sort({date:-1})
		res.json(contacts)
	}
});

// @route  POST api/contacts
// @desc   Add new Contact
// @access Private
router.post('/', (req, res) => {
	res.send('Add a new contact');
});
// @route  PUT api/contacts/:id
// @desc   Update contact
// @access Private
router.put('/:id', (req, res) => {
	res.send('Update Contact');
});
// @route  DELETE api/contacts/:id
// @desc   Delete a contact
// @access Private
router.delete('/:id', (req, res) => {
	res.send('Delete Contact');
});

module.exports = router;
