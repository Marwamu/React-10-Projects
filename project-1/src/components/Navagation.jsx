import React from 'react';

const Navagation = () => {
    return (
        <div>
            <nav className="container navbar">
          <div className="logo">
            <img src=".\images\logo.png" alt="logo" />
          </div>
          <ul className="nav-links">
            <li className="link" href="#">
              Menu
            </li>
            <li className="link" href="#">
              Location
            </li>
            <li className="link" href="#">
              About
            </li>
            <li className="link" href="#">
              Contact
            </li>
          </ul>
          <button className="main-btn">Login</button>
        </nav>
        </div>
    );
}

export default Navagation;
