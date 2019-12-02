import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
	return <div></div>;
};
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.object,
};
Navbar.defaultProps = {
	title: 'Real OGs',
};
export default Navbar;
