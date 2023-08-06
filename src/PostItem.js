import React, { useState } from "react";
import Posts from "./Posts";

export default function PostItem (props) {
    const { title, upvotes, image, user, subreddit, commentcount } = props.post
    return(
        <div className="post">
            <div className="postleft"><i className="fas fa-caret-up"></i><span>{upvotes}</span></div>
            <div className="postcenter"></div>
            <div className="postright"></div>
        </div>
    )
}