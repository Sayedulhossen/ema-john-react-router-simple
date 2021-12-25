import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import img from '../../Images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={img} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;