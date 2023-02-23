import React, { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import PostCard from "../components/post_card/PostCard";
import { ClimbingBoxLoader } from "react-spinners";
import './home.scss';

const Home = (props) => {
    const posts = props.posts;
    const users = props.users;
    const [recentPosts, setRecentPosts] = useState();

    const override = {
        position: 'static',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    useEffect(() => {
        if(posts) {
            const sortPosts = posts.sort((a, b) =>  new Date(b.date) - new Date(a.date));
            setRecentPosts(sortPosts.slice(0, 3));
        }
    }, [posts]);

    return (
        <div className="home-container">
            <Hero />
            <h3>Recent Posts</h3>
            {recentPosts && users ?
                <div className="post-container">
                    <ul>
                        {recentPosts.map(post => {
                            return <li key={post._id}><PostCard key={post._id} post={post} users={users} /></li>
                        })}
                    </ul>
                    
                </div> 
                : <ClimbingBoxLoader
                    color="#36d7b7"
                    size={25}
                    cssOverride={ override }
                />
            }
        </div>
    );
}

export default Home;
