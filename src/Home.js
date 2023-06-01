import React from 'react';
import image1 from './assets/hogwarts/hogwarts-1.png';
import image2 from './assets/hogwarts/hogwarts-3.png'

import './App.css';
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="header-wrapper">
            <div class="menu-wrapper">
                <Link to="/with-style/" className="menu-link">Home</Link>
                <Link to="/with-style/about/" className="menu-link">About</Link>
            </div>
            <h1>Headline Headline</h1>
        </div>
        <div className="teaser-wrapper">
            <Link to="/with-style/articles/"  >
            <div className="teaser-module">
                <div className="teaser-module-image">
                    <img src={image1}/>
                </div>
                <h2>Hogwarts Legacies</h2>
            </div>
            </Link>
            <Link to="/with-style/articles/"  >
            <div className="teaser-module">
                <div className="teaser-module-image">
                    <p>Coming Soon..</p>
                </div>
                <h2> More to come...</h2>
            </div>
            </Link>
        </div>
        <footer className="footer">
        </footer>
        </header>

    </div>
    );
}

export default Home;
