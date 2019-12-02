import React, { useContext, Fragment } from 'react';
import { CSStransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
	const contactContext = useContext(ContactContext);
	const { contacts, filtered } = contactContext;
	if (contacts.length == 0) {
		return <h1>Please add a contact</h1>;
	}
	return (
		<Fragment>
			<TransitionGroup>
				{filtered !== null
					? filtered.map(contact => (
							<CSStransition>
								{' '}
								<ContactItem key={contact.id} contact={contact} />
							</CSStransition>
					  ))
					: contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)}
			</TransitionGroup>
		</Fragment>
	);
};
export default Contacts;
