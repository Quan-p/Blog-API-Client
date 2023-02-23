import React, { useEffect, useState } from "react";
import './postCard.scss';

function PostCard({ post, users }) {
    const title = post.title;
    const date = new Date(post.date).toLocaleDateString();

    const authorId = post.author;
    let author = users.find(user => user._id == authorId);

    if (!author) {
        console.error(`Author with id "${authorId}" not found`);
        return null;
    }

    return (
    
        <div className="card-container">
            <h1 className="author">{author.username}</h1>
            <h2>{title}</h2>
            <p>{date}</p>
            <a href={`/posts/${post._id}`} key={post._id}>
                <button>
                    View Post
                </button>
            </a>
        </div>
        
    )
}

export default PostCard;