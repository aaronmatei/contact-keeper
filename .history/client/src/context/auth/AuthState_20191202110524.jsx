import React, { useReducer } from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from '../types';

const AuthState = props => {
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
			{
				type: 'personal',
				id: '3',
				name: 'Will Smith',
				email: 'willsmith@gmail.com',
				phone: '0798765432',
				user: '5de016e2c052b23c794864df',
				date: '2019-11-28T20:16:11.208Z',
			},
			{
				type: 'professional',
				id: '4',
				name: 'John Smith',
				email: 'johnsmith@gmail.com',
				phone: '07289366478',
				user: '5de016e2c052b23c794864df',
				date: '2019-11-28T20:16:11.208Z',
			},
		],
		current: null,
		filtered: null,
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);
	// Add contact
	const addContact = contact => {
		contact.id = uuid.v4();
		dispatch({
			type: ADD_CONTACT,
			payload: contact,
		});
	};
	// Delete contact
	const deleteContact = id => {
		dispatch({
			type: DELETE_CONTACT,
			payload: id,
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
	const updateContact = contact => {
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
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filtered: state.filtered,
				filterContacts,
				clearFilter,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
