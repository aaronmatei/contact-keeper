import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);
	const { addContact, current } = contactContext;
	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal',
			});
		}
	}, [contactContext, current]);
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});
	const { name, email, phone, type } = contact;
	const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();
		addContact(contact);
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal',
		});
	};
	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>Add Contact</h2>
			<input type='text' name='name' placeholder='Name' value={name} onChange={onChange} />
			<input type='text' name='email' placeholder='Email' value={email} onChange={onChange} />
			<input type='text' name='phone' placeholder='Phone' value={phone} onChange={onChange} />
			<h5>Contact Type</h5>
			<input type='radio' name='type' value='personal' checked={type === 'personal'} onChange={onChange} />{' '}
			Personal{' '}
			<input
				type='radio'
				name='type'
				value='professional'
				checked={type === 'professional'}
				onChange={onChange}
			/>{' '}
			professional{' '}
			<div>
				<input type='submit' value='Add contact' className='btn btn-primary btn-block' />
			</div>
		</form>
	);
};
export default ContactForm;
