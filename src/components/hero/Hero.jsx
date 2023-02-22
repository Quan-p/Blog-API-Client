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
            <a href={'/posts'}>
                <button className="hero-button">     
                    Start Reading                      
                </button>
            </a>
        </div>
    )
}

export default Hero;
