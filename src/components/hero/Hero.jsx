import React from "react";
import './hero.scss';

const Hero = () => {
    return (
        <div className="hero-container">
            <h2 className="hero-title">Welcome to my Blog</h2>
            <h3 className="hero-subtitle">
                Created as a project for The Odin Project. 
                Check out my random thoughts and amazing test posts. 
            </h3>
            <button className="hero-button">
                <a href={'/posts'}>
                    Start Reading
                </a>
            </button>
        </div>
    )
}

export default Hero;