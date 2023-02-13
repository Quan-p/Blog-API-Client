import React, { useEffect, useState } from "react";

function PostCard({ post, users }) {
    const title = post.title;
    const date = post.date;
    let author = users.find(user => user._id == post.author);

    return (
        <a href={`/posts/${post._id}`} key={post._id}>
            <div>
                <h1>{author.username}</h1>
                <h2>{title}</h2>
                <p>{date}</p>
            </div>
        </a>
    )
}

export default PostCard;