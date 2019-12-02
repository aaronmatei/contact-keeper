import React, { useReducer } from 'react';
import uuid from 'uuid';
import alertReducer from './alertReducer';
import AlertContext from './alertContext';
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

const AlertState = props => {
	const initialState = [];

	const [state, dispatch] = useReducer(alertReducer, initialState);
	// Set alert
	const setAlert = (msg, type) => {
		const id = uuid.v4();
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AlertState;
