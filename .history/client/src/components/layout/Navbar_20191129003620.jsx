import React from 'react';
import PropTypes from 'prop-types';
import { FaIdCardAlt } from 'react-icons/fa';

const Navbar = ({ title, icon }) => {
	return (
		<div className='navbar bg-primary'>
			<h1>
				<FaIdCardAlt />
			</h1>
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
