import React, { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import CommentForm from "../commentForm/CommentForm";
import './postDetails.scss';

const PostDetails = (props) => {
    const { posts, users, handleGetAuthorUsername } = props;
    const [commentArray, setCommentArray] = useState();

    const postId = window.location.pathname.split("/").pop();

    useEffect(() => {
        const fetchComments = async() => {
            try {
                const commentReq = await fetch(`https://blog-api-ifcw.onrender.com/posts/${postId}/comments`);
                const commentJson = await commentReq.json();
                setCommentArray(commentJson.comments);
            } catch(error) {
                console.error(error)
            }
        };
        fetchComments();
    }, [postId]);

    const handleCommentSubmit = (newComment) => {
        setCommentArray(prevComments => [...prevComments, newComment])
    };

    const override = {
        position: 'static',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    if (!posts || !users || !handleGetAuthorUsername) {
        return <ClimbingBoxLoader
                    color="#36d7b7"
                    size={25}
                    cssOverride={ override }
                />;
    }

    
    let postsArray = Array.from(posts ? Object.values(posts): []);
    const flatArray = postsArray.flat();
    let postObj = flatArray.find(post => post._id == postId);
    
    
    let authorUsername = postObj?.author && handleGetAuthorUsername(postObj.author);
    
    if (!postObj) {
        return <div>Post not found</div>;
    }

    let date = new Date(postObj.date).toLocaleString();

    return (
        <div>
            {postObj && authorUsername ? (
                <div className="detail-container">
                    <h1>{postObj.title}</h1>
                    <h3>
                        Posted by 
                        <span> {authorUsername}</span>
                    </h3>
                    <h3>{date}</h3>
                    <div className="content-container">{postObj.content}</div>
                    <h3>Comments</h3>
                    <CommentForm postId={postId} onCommentSubmit={handleCommentSubmit} />
                    <ul className="comment-list">
                        {commentArray.length > 0 ? (
                            commentArray.map(comment => {
                                return <li key={comment._id} className='comment-container'>
                                    <div className="comment-header">
                                        <h4 className='comment-content'>
                                            {comment.user} 
                                        </h4>
                                        <span className='comment-content'>
                                            {new Date(comment.date).toLocaleString()}
                                        </span>
                                    </div>
                                    <div className='comment-content'>
                                        {comment.text}
                                    </div>
                                    
                                </li>
                            })
                        ) : (
                            <p>No comments yet</p>
                        )}
                    </ul>
                </div>
            ): <ClimbingBoxLoader
                    color="#36d7b7"
                    size={25}
                    cssOverride={ override }
                />
            }
            
        </div>
    )
}

export default PostDetails;