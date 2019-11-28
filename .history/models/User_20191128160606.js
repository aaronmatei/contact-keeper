const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
        type: Date,
        default: Date.now
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
});
