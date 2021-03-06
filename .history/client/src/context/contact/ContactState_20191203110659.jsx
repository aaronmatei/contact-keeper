import React, { useReducer } from 'react';
import axios from 'axios';
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
	GET_CONTACTS,
	CONTACT_ERROR,
	CLEAR_CONTACTS,
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: null,
		current: null,
		filtered: null,
		error: null,
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);
	// Get contacts
	const getContacts = async () => {
		try {
			const res = await axios.get('/api/contacts');
			dispatch({
				type: GET_CONTACTS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.response.msg,
			});
		}
	};

	// Add contact
	const addContact = async contact => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/api/contacts', contact, config);
			dispatch({
				type: ADD_CONTACT,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.response.msg,
			});
		}
	};
	// Delete contact
	const deleteContact = async id => {
		try {
			await axios.delete(`/api/contacts/${id}`);
			dispatch({
				type: DELETE_CONTACT,
				payload: id,
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.response.msg,
			});
		}
	};
	// Clear contacts
	const clearContacts = () => {
		dispatch({
			type: CLEAR_CONTACTS,
			payload: null,
		});
	};

	// Set Current contact
	const setCurrent = contact => {
		dispatch({
			type: SET_CURRENT,
			payload: contact,
		});
	};
	// Clear current Contact
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT,
			payload: null,
		});
	};
	// Update Contact
	const updateContact = async contact => {
		dispatch({
			type: UPDATE_CONTACT,
			payload: contact,
		});
	};
	// Filter contacts
	const filterContacts = text => {
		dispatch({
			type: FILTER_CONTACTS,
			payload: text,
		});
	};
	//Clear filter
	const clearFilter = () => {
		dispatch({
			type: CLEAR_FILTER,
			payload: null,
		});
	};
	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				error: state.error,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter,
				getContacts,
				clearContacts,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
