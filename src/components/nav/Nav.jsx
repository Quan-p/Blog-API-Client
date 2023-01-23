import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss';

const Nav = () => {
    return (
        <div className="nav-container">
            This is a navbar
            <Link to='/'>Home</Link>
            <Link to='posts'>Posts</Link>
        </div>
    )
}

export default Nav;
