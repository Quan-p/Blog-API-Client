import React, { useEffect, useState } from "react";

const Post = (props) => {
    const posts = props.posts;
    const [sortedPosts, setSortedPosts] = useState();

    useEffect(() => {
        if(posts) {
            const sortPosts = posts.sort((a, b) =>  new Date(b.date) - new Date(a.date));
            setSortedPosts(sortPosts);
        }
    }, [posts]);

    return (
        <div>
            This is the Post page
            {sortedPosts ?
                <ul>
                {sortedPosts.map(post => {
                    return <li key={post._id}>{post.title}</li>
                })}
                </ul>
                : <div>Nothing is loaded</div>
            }
        </div>
    );
}

export default Post;