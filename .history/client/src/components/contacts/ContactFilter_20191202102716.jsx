import React, { useContext, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	return (
		<form>
			<input ref={text} type='text' />
		</form>
	);
};
export default ContactFilter;
