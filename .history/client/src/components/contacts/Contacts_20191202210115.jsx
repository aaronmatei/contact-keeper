import React, { useContext, useEffect, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const Contacts = () => {
	const contactContext = useContext(ContactContext);
	const { contacts, filtered, getContacts, loading } = contactContext;

	useEffect(() => {
		getContacts();
		// eslint-disable-next-line
	}, []);

	if (contacts.length === 0) {
		return <h1>Please add a contact</h1>;
	}
	return (
		<Fragment>
			{contacts !== null && !loading ? (): <Spinner />}
			<TransitionGroup>
				{filtered !== null
					? filtered.map(contact => (
							<CSSTransition key={contact._id} timeout={500} classNames='item'>
								<ContactItem contact={contact} />
							</CSSTransition>
					  ))
					: contacts.map(contact => (
							<CSSTransition key={contact._id} timeout={500} classNames='item'>
								<ContactItem contact={contact} />
							</CSSTransition>
					  ))}
			</TransitionGroup>
		</Fragment>
	);
};
export default Contacts;
