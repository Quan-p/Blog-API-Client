import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss';

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="left-container">
                This is a navbar
            </div>
            <div className="right-container">
                <Link to='/'>Home</Link>
                <Link to='posts'>Posts</Link>
            </div>
            
        </div>
    )
}

export default Nav;
