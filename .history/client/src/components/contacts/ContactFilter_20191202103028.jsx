import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	const text = useRef('');
	const onChange = e => {
		if (text.current.value !== '') {
			contactContext.filterContacts(e.target.value);
		} else {
			contactContext.clearFilter();
		}
	};
	return (
		<form>
			<input ref={text} type='text' placeholder='filter contacts...' onChange={onChange} />
		</form>
	);
};
export default ContactFilter;
