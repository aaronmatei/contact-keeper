import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactReducer from './contactReducer';
import ContactContext from './contactContext';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				type: 'personal',
				id: '1',
				name: 'keysha Tee',
				email: 'keyshatee@gmail.com',
				phone: '0701586620',
				user: '5de016e2c052b23c794864df',
				date: '2019-11-28T20:17:03.092Z',
			},
			{
				type: 'professional',
				id: '2',
				name: 'Saronique Smith',
				email: 'saronique@gmail.com',
				phone: '0712345678',
				user: '5de016e2c052b23c794864df',
				date: '2019-11-28T20:16:11.208Z',
			},
		],
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);
	// Add contact
	// Delete contact
	// Set Current contact
	// Clear current Contact
	// Update Contact
	// Filter contacts
	//Clear filter
	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
