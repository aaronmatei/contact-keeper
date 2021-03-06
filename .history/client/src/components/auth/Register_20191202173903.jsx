import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const { setAlert } = alertContext;
	const { registerUser, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
		if (error === 'User with that email already exists') {
			setAlert(error, 'danger');
			clearErrors();
		}
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = user;
	const onChange = e =>
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	const onSubmit = e => {
		e.preventDefault();

		if (name === '' || email === '' || password === '') {
			setAlert('Please enter all fields', 'danger');
		} else if (password !== password2) {
			setAlert('Passwords must match', 'danger');
		} else {
			registerUser({
				name,
				email,
				password,
			});
		}
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-info'>Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' id='' value={name} onChange={onChange} required />
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Email</label>
					<input type='email' name='email' id='' value={email} onChange={onChange} required />
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Password</label>
					<input
						type='password'
						name='password'
						id=''
						value={password}
						onChange={onChange}
						required
						minLength='6'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Confirm password</label>
					<input
						type='password'
						name='password2'
						id=''
						value={password2}
						onChange={onChange}
						required
						minLength='6'
					/>
				</div>
				<input type='submit' value='Register' className='btn btn-info btn-block' />
			</form>
		</div>
	);
};
export default Register;
