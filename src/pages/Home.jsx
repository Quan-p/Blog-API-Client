import React, { useEffect, useState } from 'react';
import Hero from '../components/hero/Hero';
import PostCard from '../components/post_card/PostCard';
import { BounceLoader } from 'react-spinners';
import './home.scss';

const Home = (props) => {
	const posts = props.posts;
	const users = props.users;
	const [recentPosts, setRecentPosts] = useState();

	const override = {
		position: 'absolute',
		top: '50%',
		left: '50%',
	};

	useEffect(() => {
		if (posts) {
			const sortPosts = posts.sort(
				(a, b) => new Date(b.date) - new Date(a.date)
			);
			setRecentPosts(sortPosts.slice(0, 3));
		}
	}, [posts]);

	return (
		<div className='home-container'>
			<Hero />
			<h3 className='recent-header'>Recent Posts</h3>
			<div className='post-container'>
				{recentPosts && users ? (
					<ul>
						{recentPosts.map((post) => {
							return (
								<li key={post._id}>
									<PostCard
										key={post._id}
										post={post}
										users={users}
									/>
								</li>
							);
						})}
					</ul>
				) : (
					<BounceLoader
						color='#D4A373'
						size={45}
						cssOverride={override}
					/>
				)}
			</div>
		</div>
	);
};

export default Home;
