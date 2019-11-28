const mongoose = require('mongoose');
import default from '../.history/server_20191128160820';
const ContactSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
	},
	type: {
        type: String,
        default
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('contact', ContactSchema);
