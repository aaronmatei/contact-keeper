import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;
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
		}
		console.log('Register Submit');
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-info'>Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' id='' value={name} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Email</label>
					<input type='email' name='email' id='' value={email} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Password</label>
					<input type='password' name='password' id='' value={password} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Confirm password</label>
					<input type='password' name='password2' id='' value={password2} onChange={onChange} />
				</div>
				<input type='submit' value='Register' className='btn btn-info btn-block' />
			</form>
		</div>
	);
};
export default Register;
