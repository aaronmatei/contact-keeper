import React, { useReducer } from 'react';
import authReducer from './authReducer';
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
		error: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);
	// Load user
	// Register user
	// Login user
	// Log out
	// clear users

	return (
		<AuthContext.Provider
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
		</AuthContext.Provider>
	);
};

export default ContactState;
