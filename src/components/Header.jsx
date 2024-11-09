import React from "react";
import "../Style.css"; 

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>ExploreXperts</h1>
        <nav>
          <ul id="HEAD">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
