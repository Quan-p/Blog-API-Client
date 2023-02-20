import React, { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const Post = (props) => {
    const posts = props.posts;
    const [sortedPosts, setSortedPosts] = useState();

    const override = {
        position: 'static',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

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
                : <ClimbingBoxLoader
                color="#36d7b7"
                size={25}
                cssOverride={ override }
            />
            }
        </div>
    );
}

export default Post;