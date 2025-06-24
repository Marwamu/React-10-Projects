import React from 'react';
import "./Navagationmodule.css";


const Navgation = () => {
    return (
        <nav className='container navbar'>
            <div className="logo">
                <img src=".\images\logo.png" alt="" />
            </div>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    );
}

export default Navgation;
