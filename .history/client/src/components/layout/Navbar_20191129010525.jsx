import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaIdCardAlt } from 'react-icons/fa';

const Navbar = ({ title, icon }) => {
	return (
		<div className='navbar bg-info'>
			<h1>
				<FaIdCardAlt /> {title}
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
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
