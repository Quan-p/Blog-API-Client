import React from "react";

const PostDetails = (props) => {
    if (!props || !props.posts) {
        return null;
    }

    const { posts, users, handleGetAuthorUsername } = props;

    const postId = window.location.pathname.split("/").pop();
    const postsArray = Object.values(posts).flat();
    let postObj = postsArray.find(post => post._id == postId);
    const authorUsername = handleGetAuthorUsername(postObj.author)
    console.log(authorUsername);
    // if (!postObj) {
    //     return <div>Post not found</div>;
    // }

    return (
        <div>
            This is the post details page
            <div>{postObj.title}</div>
            <div>{authorUsername}</div>
        </div>
    )
}

export default PostDetails;