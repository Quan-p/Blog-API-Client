import React from "react";

const PostDetails = (props) => {
    const { posts, users, handleGetAuthorUsername } = props;

    if (!posts || !users || !handleGetAuthorUsername) {
        return <div>Loading...</div>;
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
            This is the post details page
            {postObj && authorUsername ? (
                <div>
                    <div>{postObj.title}</div>
                    <div>{authorUsername}</div>
                    <div>{postObj.content}</div>
                    <div>{date}</div>
                </div>
            ): <div>Loading...</div>}
        </div>
    )
}

export default PostDetails;