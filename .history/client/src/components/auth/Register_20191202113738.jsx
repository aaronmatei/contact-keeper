import React, { useState } from 'react';

const Register = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = user;

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-primary'>Register</span>
			</h1>
			<form>
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
					<input type='text' name='name' id='' value={name} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Confirm password</label>
					<input type='text' name='name' id='' value={name} onChange={onChange} />
				</div>
			</form>
		</div>
	);
};
export default Register;
