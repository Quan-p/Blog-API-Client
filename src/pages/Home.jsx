import React, { useEffect, useState } from "react";

export default function Home() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const req = await fetch('https://blog-api-ifcw.onrender.com/posts');
                const reqJson = await req.json();
                setPosts(reqJson.posts);
            } catch (err) {
                console.log(err);
            }
        }
        fetchPosts();
    }, []); 
    return (
        <div className="home-container">
            <div>
                Quan's Blog
                <div>
                    {posts[1].title}: {posts[1].content}
                </div>
            </div>
        </div>
    );
}


