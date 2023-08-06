import React, { useState } from "react";
import Posts from "./Posts";
import './PostItem.css';

export default function PostItem (props) {
    const { title, upvotes, image, user, subreddit, commentcount } = props.post
    return(
        <div className="post">
            <div className="postleft"><i className="fas fa-caret-up"></i><span>{upvotes}</span><i className="fas fa-caret-down"></i></div>
            <div className="postcenter"><img src={image} alt=""/></div>
            <div className="postright">
                <h3><a href={`/r/${subreddit}/${title}`}>{title}</a></h3>
                <span className="post-info">submitted sometime ago by <a href={`/u/${user}`}>{user}</a> to <a href={`/u/${subreddit}`}>{subreddit} </a></span>
                <p className="post-info">
                    {commentcount} comments | share | save | hide | report
                </p>
            </div>
        </div>
    )
}