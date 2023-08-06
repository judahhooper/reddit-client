import React from "react";
import './SideNav.css';
export default function SideNav() {
    
    const menus = [
        { to: '/r/popular', text: 'Popular'},
        { to: '/r/all', text: 'All'},
        { to: '/r/random', text: 'Random'}
    ];

    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "gaming",
        "movies",
        "mildlyinteresting",
        "showerthoughts"
    ];


    return(
        <div className="sidenav">
            <div className="sidenav_logo">
                <img src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.png" alt=""/>
            </div>
            <div className="sidenav_search">
                <input type="text" name="search" placeholder="Search"></input>
                <i className="fas fa-search"></i>
            </div>
            <div className="sidenav_link">
                <ul className="sidenav_menu">
                {menus.map(menu=>(
                    <li><a href={menu.to}>{menu.text}</a></li>
                ))}
                </ul>
                <hr />
                <ul className="sidenav_subreddit">
                    {subreddits.map(subreddit=>(
                    <li><a href={`/r/${subreddit}`}>${subreddit}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}