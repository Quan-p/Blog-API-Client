import React, { useEffect, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import './post.scss';

const Post = (props) => {
	const posts = props.posts;
	const [sortedPosts, setSortedPosts] = useState();

	const override = {
		position: 'static',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	useEffect(() => {
		if (posts) {
			const sortPosts = posts.sort(
				(a, b) => new Date(b.date) - new Date(a.date)
			);
			setSortedPosts(sortPosts);
		}
	}, [posts]);

	return (
		<div className='posts-container'>
			<h2>All Posts</h2>
			{sortedPosts ? (
				<ul className='post-list'>
					{sortedPosts.map((post) => {
						return (
							<Link to={`/posts/${post._id}`} key={post._id}>
								<li key={post._id}>{post.title}</li>
							</Link>
						);
					})}
				</ul>
			) : (
				<ClimbingBoxLoader
					color='#36d7b7'
					size={25}
					cssOverride={override}
				/>
			)}
		</div>
	);
};

export default Post;
