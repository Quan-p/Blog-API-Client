import React, { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import PostCard from "../components/post_card/PostCard";

const Home = (props) => {
    const posts = props.posts;
    const users = props.users;
    const [recentPosts, setRecentPosts] = useState();

    useEffect(() => {
        if(posts) {
            const sortPosts = posts.sort((a, b) =>  new Date(b.date) - new Date(a.date));
            setRecentPosts(sortPosts.slice(0, 3));
        }
    }, [posts]);

    return (
        <div className="home-container">
            <Hero />
            {recentPosts ?
                <div className="post-container">
                    <h3>Recent Posts</h3>
                    <ul>
                        {recentPosts.map(post => {
                            return <PostCard key={post._id} post={post}/>
                        })}
                    </ul>
                    
                </div> 
                : <div>Nothing is loaded</div>
            }
            {users ?
                <div className="user-container">
                    <h3>Users</h3>
                    <ul>
                        {users.map(user => {
                            return <li key={user._id}>{user.username}</li>
                        })}
                    </ul>
                    
                </div> 
                : <div>No users loaded</div>
            }
        </div>
    );
}

export default Home;
