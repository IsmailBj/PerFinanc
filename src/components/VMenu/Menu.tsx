import React from "react";
import './MenuS.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const Menu = () =>{
    return (
        <div className="menu">
            <div className="menu-fit">
                <div className="menu-main-content">
                    <div className="menu-title">Main</div>
                    <div className="menu-list">
                        <ul>
                            <li>
                                <span>@</span>
                                <span className="menu-options">DashBoard</span>
                            </li>
                            <li>
                                <span>@</span>
                                <span className="menu-options">Calendar</span>
                            </li>
                            <li>
                                <span>@</span>
                                <span className="menu-options">Saved</span>
                            </li>
                            <li>
                                <span>@</span>
                                <span className="menu-options">Info</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-categ-content">
                    <div className="menu-title">Categories</div>
                    <div className="menu-list">
                        <ul>
                            <li>
                                <span>@</span>
                                <span className="menu-options">Rent</span>
                            </li>
                            <li>
                                <span>@</span>
                                <span className="menu-options">Food</span>
                            </li>
                            <li>
                                <span>@</span>
                                <span className="menu-options">Travel</span>
                            </li>
                            <li>
                                <span>@</span>
                                <span className="menu-options">Coffee</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Menu