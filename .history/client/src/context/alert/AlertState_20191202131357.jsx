import React, { useReducer } from 'react';
import uuid from 'uuid';
import alertReducer from './alertReducer';
import AlertContext from './alertContext';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
	const initialState = [];

	const [state, dispatch] = useReducer(alertReducer, initialState);
	// Set alert
	const setAlert = (msg, type) => {
		const id = uuid.v4();
		dispatch({
			type: SET_ALERT,
			payload: { msg, type, id },
		});
		setTimeout(
			() =>
				dispatch({
					type: REMOVE_ALERT,
					payload: id,
				}),
			5000
		);
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
