import React from "react";

function PostCard({ post }) {
    const title = post.title;
    const date = post.date;

    return (
        <a href={`/posts/${post._id}`} key={post._id}>
            <div>
                <h1>{post.author}</h1>
                <h2>{title}</h2>
                <p>{date}</p>
            </div>
        </a>
    )
}

export default PostCard;