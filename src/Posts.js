import React from "react";
import PostItem from "./PostItem"
import './Posts.css';

export default function Posts () {
    const posts = [
        { upvotes: '634', image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg', title:'lorem ipsum', user: 'randomuser', subreddit:'example', commentcount: '221'}
    ]
    return(
        <div className="posts">
            {posts.map(post=>(
                <PostItem post={post}/>
            ))}
        </div>
    )
}