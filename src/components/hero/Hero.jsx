import React from "react";

const Hero = () => {
    return (
        <div>
            <h2>Welcome to my Blog</h2>
            <p>
                Created as a project for The Odin Project. 
                Check out my random thoughts and amazing test posts. 
            </p>
            <button>
                <a href={'/posts'}>
                    Start Reading
                </a>
            </button>
        </div>
    )
}

export default Hero;