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
          title:'The mountains of madrid', 
          user: 'randomuser', 
          subreddit:'example', 
          commentcount: `${Math.floor(Math.random()*1000)}`},
          { upvotes: `${Math.floor(Math.random()*1000)}`, 
          image: `https://picsum.photos/id/${Math.floor(
            Math.random()*50)}/400/300`,
          title:'man city SCANDAL rocks Pep', 
          user: 'randomuser', 
          subreddit:'example', 
          commentcount: `${Math.floor(Math.random()*1000)}`},
          { upvotes: `${Math.floor(Math.random()*1000)}`, 
          image: `https://picsum.photos/id/${Math.floor(
            Math.random()*50)}/400/300`,
          title:'Watch Stephen Fry own panelist on QI', 
          user: 'randomuser', 
          subreddit:'example', 
          commentcount: `${Math.floor(Math.random()*1000)}`},
          { upvotes: `${Math.floor(Math.random()*1000)}`, 
          image: `https://picsum.photos/id/${Math.floor(
            Math.random()*50)}/400/300`,
          title:'If you dont buy a ticket you dont win the raffle', 
          user: 'randomuser', 
          subreddit:'example', 
          commentcount: `${Math.floor(Math.random()*1000)}`},
          { upvotes: `${Math.floor(Math.random()*1000)}`, 
          image: `https://picsum.photos/id/${Math.floor(
            Math.random()*50)}/400/300`,
          title:'Bob Dylan and his blues', 
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