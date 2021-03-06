import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = () => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const { setAlert } = alertContext;
	const { registerUser, error, clearErrors, isAuthenticated } = authContext;

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;
	const onChange = e =>
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	const onSubmit = e => {
		e.preventDefault();
		console.log('Login Submit');
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-info'>Login</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Email</label>
					<input type='email' name='email' id='' value={email} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Password</label>
					<input type='password' name='password' id='' value={password} onChange={onChange} />
				</div>

				<input type='submit' value='Login' className='btn btn-info btn-block' />
			</form>
		</div>
	);
};
export default Login;
