import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to World Tourism</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/catagories">Catagories</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;