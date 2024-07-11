import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="main">
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
