import React from "react";
import './Header.css';

export default function Header() {
    return(
        <div className="header">
            <div className="header-left">
                <ul>
                    <li><a href='/r/popular'>Popular</a></li>
                    <li><a href='/r/hot'>Hot</a></li>
                    <li><a href='/r/rising'>Rising</a></li>
                    <li><a href='/r/controversial'>Controversial</a></li>
                    <li><a href='/r/gilded'>Gilded</a></li>
                </ul>
            </div>
            <div className="header-right">
                <i className="fas fa-bell"></i>
                <img src=""/>
                <div className="header-user">
                    <span>Judah Hooper</span>
                    <i className="fas fa-caret-down"></i>
                </div>
            </div>
        </div>
    )
}