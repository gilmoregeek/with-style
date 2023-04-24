import React from 'react';
import './About.css';
import { Link } from "react-router-dom";

function About() {
    return(
        <div className="About">
           <div className="header-wrapper">
            <div class="menu-wrapper">
                <Link to="/with-style/" className="menu-link">Home</Link>
                <Link to="/with-style/about/" className="menu-link">About</Link>
            </div>
            <p>coming soon ...</p>
        </div>
        </div>
    );
}

export default About;