import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import './postDetails.scss';

const PostDetails = (props) => {
    const { posts, users, handleGetAuthorUsername } = props;

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

    const postId = window.location.pathname.split("/").pop();
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
                <div>
                    <div>{postObj.title}</div>
                    <div>{authorUsername}</div>
                    <div>{postObj.content}</div>
                    <div>{date}</div>
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