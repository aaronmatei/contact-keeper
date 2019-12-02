import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaIdCardAlt, FaSignOutAlt } from 'react-icons/fa';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, logoutUser, user } = authContext;

	const onLogout = () => {
		logoutUser();
	};

	const authLinks = (
		<Fragment>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
			<li>Helloo {user && user.name}</li>
			<li>
				<a onClick={onLogout} href='#!'>
					<FaSignOutAlt /> <span className='hide-sm'>Log out</span>
				</a>
			</li>
		</Fragment>
	);
	const guestLinks = (
		<Fragment>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</Fragment>
	);
	return (
		<div className='navbar bg-info'>
			<h1>
				<FaIdCardAlt /> {title}
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.object,
};
Navbar.defaultProps = {
	title: 'Real OGs',
	icon: <FaIdCardAlt />,
};
export default Navbar;
