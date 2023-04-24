import React from 'react';
import './App.css';
import Home from "./Home";
import Article from "./articles/Article";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Apps">
      <BrowserRouter>
      <Routes>
        <Route path="/with-style/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/with-style/articles/" element={<Article />} />
        <Route path="/with-style/about/" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
