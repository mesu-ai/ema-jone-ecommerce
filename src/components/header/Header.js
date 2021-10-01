
import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" height="80" width="300" />

            <nav className="navbar">
                <a href="/Home">Home</a>
                <a href="/Shop">Shop</a>
                <a href="/OrderReview">Order Review</a>
                <a href="ManageInventoryHere">Manage Inventory Here</a>
            </nav>

            
        </div>
    );
};

export default Header;