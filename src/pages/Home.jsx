import React, { useEffect, useState } from "react";

export default function Home() {
    const [posts, setPosts] = useState();
    const [recentPosts, setRecentPosts] = useState();
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const req = await fetch('https://blog-api-ifcw.onrender.com/posts');
                const reqJson = await req.json();
                setPosts(reqJson.posts);
                const sortPosts = reqJson.posts.sort((a, b) =>  new Date(b.date) - new Date(a.date));
                setRecentPosts(sortPosts.slice(0, 3));
            } catch (err) {
                console.log(err);
            }
        }
        fetchPosts();
    }, []); 
    return (
        <div className="home-container">
            {posts && recentPosts ?
                <div className="post-container">
                    <h3>Recent Posts</h3>
                    <ul>
                        {recentPosts.map(post => {
                            return <li key={post._id}>{post.title}</li>
                        })}
                    </ul>
                    
                </div> 
                : <div>Nothing is loaded</div>
            }
        </div>
    );
}


