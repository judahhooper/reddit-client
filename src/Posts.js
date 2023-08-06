import React from "react";
import PostItem from "./PostItem"

export default function Posts () {
    const posts = [
        { upvote: '634', image: '', title:'lorem', user: 'user1', subreddit:'example', commentcounts: '221'}
    ]
    return(
        <div className="posts">
            {posts.map(post=>(
                <PostItem post={post}/>
            ))}
        </div>
    )
}