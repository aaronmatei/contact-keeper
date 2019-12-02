import React, { useState } from 'react';

const ContactForm = () => {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});
	const { name, email, phone, type } = contact;
	return (
		<form>
			<h2 className='text-primary'>Add Contact</h2>
			<input type='text' name='name' placeholder='name' value={name} onChange={onChange} />
			<input type='text' name='name' placeholder='name' value={name} onChange={onChange} />
			<input type='text' name='name' placeholder='name' value={name} onChange={onChange} />
			<input type='text' name='name' placeholder='name' value={name} onChange={onChange} />
		</form>
	);
};
export default ContactForm;
