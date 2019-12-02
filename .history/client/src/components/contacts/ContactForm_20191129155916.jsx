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
			<h2 className='text-primary'></h2>
		</form>
	);
};
export default ContactForm;
