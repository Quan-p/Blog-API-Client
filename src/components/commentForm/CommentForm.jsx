import React, { useEffect, useState } from "react";
import './commentForm.scss';

const CommentForm = ({ postId }) => {
    const [user, setUser] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postCall = await fetch(`https://blog-api-ifcw.onrender.com/posts/${postId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user, text }),
            });
            if (postCall.status === 200) {
                console.log('Comment submitted successfully!');
                setUser('');
                setText('');
              } else {
                throw new Error('Form submission failed!');
              }
        } catch (error) { 
            console.error(error);
        }
    }

    return (
        <div className="form-container">
            <form className="comment-form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>
                        Username:
                    </label>
                    <input className="username-input" type="text" value={user} placeholder='Enter your name' onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className="input-container">
                    <label>
                        Message:
                    </label>
                    <textarea className="message-input" value={text} placeholder='Add a comment...' onChange={(e) => setText(e.target.value)} />
                </div>
                <button className="submit-btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CommentForm;
