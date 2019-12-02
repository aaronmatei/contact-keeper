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
		contacts: [],
	};
};
