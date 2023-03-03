import React, { useEffect, useState } from "react";

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
        <div>
            <h3>Comment Form</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                </label>
                    <label>
                        Message:
                        <textarea value={text} onChange={(e) => setText(e.target.value)} />
                    </label>
                    <button type="submit">
                        Submit
                    </button>
                    
            </form>
        </div>
    )
}

export default CommentForm;
