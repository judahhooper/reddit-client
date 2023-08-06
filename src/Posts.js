import React from "react";
import PostItem from "./PostItem"
import './Posts.css';

export default function Posts () {
    const posts = [
        { upvotes: `${Math.floor(Math.random()*1000)}`, 
          image: `https://picsum.photos/id/${Math.floor(
            Math.random()*50)}/400/300`,
          title:'cocaine bear: it is NOT what you think', 
          user: 'randomuser', 
          subreddit:'example', 
          commentcount: `${Math.floor(Math.random()*1000)}`},
          { upvotes: `${Math.floor(Math.random()*1000)}`, 
          image: `https://picsum.photos/id/${Math.floor(
            Math.random()*50)}/400/300`,
          title:'lorem ipsum', 
          user: 'randomuser', 
          subreddit:'example', 
          commentcount: `${Math.floor(Math.random()*1000)}`},
          { upvotes: `${Math.floor(Math.random()*1000)}`, 
          image: `https://picsum.photos/id/${Math.floor(
            Math.random()*50)}/400/300`,
          title:'lorem ipsum', 
          user: 'randomuser', 
          subreddit:'example', 
          commentcount: `${Math.floor(Math.random()*1000)}`},
          { upvotes: `${Math.floor(Math.random()*1000)}`, 
          image: `https://picsum.photos/id/${Math.floor(
            Math.random()*50)}/400/300`,
          title:'lorem ipsum', 
          user: 'randomuser', 
          subreddit:'example', 
          commentcount: `${Math.floor(Math.random()*1000)}`},
          { upvotes: `${Math.floor(Math.random()*1000)}`, 
          image: `https://picsum.photos/id/${Math.floor(
            Math.random()*50)}/400/300`,
          title:'lorem ipsum', 
          user: 'randomuser', 
          subreddit:'example', 
          commentcount: `${Math.floor(Math.random()*1000)}`},
          { upvotes: `${Math.floor(Math.random()*1000)}`, 
          image: `https://picsum.photos/id/${Math.floor(
            Math.random()*50)}/400/300`,
          title:'lorem ipsum', 
          user: 'randomuser', 
          subreddit:'example', 
          commentcount: `${Math.floor(Math.random()*1000)}`}

    ]
    return(
        <div className="posts">
            {posts.map(post=>(
                <PostItem post={post}/>
            ))}
        </div>
    )
}