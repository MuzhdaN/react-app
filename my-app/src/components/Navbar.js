import React from 'react';
import logo from '../images/logo192.png';

export default function Navbar() {
    return (
        <nav className="nav">
            <div className='nav-left'>
            <img src={logo} alt="logo" className='logo'/>
            <h3 className='title'> ReactFacts </h3>
            </div>
            <h4> React Course - Project 1</h4>
        </nav>
    );
}