import React from 'react';
import { FaEnvelopeOpen, FaPhone } from 'react-icons/fa';

const ContactItem = ({ contact }) => {
	const { id, name, email, phone, type } = contact;

	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>
				{name}
				{'  '}
				<span
					style={{ float: 'right' }}
					className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}
				>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
			</h3>
			<ul className='list'>
				{email && (
					<li>
						<FaEnvelopeOpen />
						{email}
					</li>
				)}
				{phone && (
					<li>
						<FaPhone />
						{phone}
					</li>
				)}
			</ul>
		</div>
	);
};
export default ContactItem;
