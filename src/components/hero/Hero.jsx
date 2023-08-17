import React from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';

const Hero = () => {
	return (
		<div className='hero-container'>
			<h2 className='hero-title'>Welcome to Blogify</h2>
			<h3 className='hero-subtitle'>
				Created as a project for The Odin Project.
			</h3>
			<h3 className='hero-subtitle'>
				Check out my random thoughts and amazing test posts.
			</h3>
			<Link to={'/posts'}>
				<button className='hero-button'>Start Reading</button>
			</Link>
		</div>
	);
};

export default Hero;
