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
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
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
