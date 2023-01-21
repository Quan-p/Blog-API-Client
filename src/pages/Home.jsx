import React, { useEffect, useState } from "react";

export default function Home() {
    const [posts, setPosts] = useState();
    //const [recentPosts, setRecentPosts] = useState();
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const req = await fetch('https://blog-api-ifcw.onrender.com/posts');
                const reqJson = await req.json();
                setPosts(reqJson.posts);
                // const sortPosts = posts.sort((a, b) =>  new Date(b.date) - new Date(a.date));
                // setRecentPosts(sortPosts[0], sortPosts[1], sortPosts[2]);
            } catch (err) {
                console.log(err);
            }
        }
        fetchPosts();
    }, []); 
    return (
        <div className="home-container">
            {posts ?
                <div className="post-container">
                    <h3>Title</h3>
                    <ul>
                        {posts.map(post => {
                            return <li key={post._id}>{post.title}</li>
                        })}
                    </ul>
                </div> 
                : <div>Nothing is loaded</div>
            }
        </div>
    );
}


