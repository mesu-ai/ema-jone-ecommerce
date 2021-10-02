
import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" height="80" width="300" />

            <nav className="navbar">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory Here</NavLink>
            </nav>

            
        </div>
    );
};

export default Header;