import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
	return (
		<div className='nav-container'>
			<div className='left-container'>
				<Link to='/' className='title'>
					Blogify
				</Link>
			</div>
			<div className='right-container'>
				<Link to='/'>Home</Link>
				<Link to='posts'>Posts</Link>
			</div>
		</div>
	);
};

export default Nav;
