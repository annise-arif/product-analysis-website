import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
            <nav className='navigation'>
                <Link className='home' to={'/'}>HOME</Link>
                <Link className='reviews' to={'/reviews'}>REVIEWS</Link>
                <Link className='dashboard' to={'/dashboard'}>DASHBOARD</Link>
                <Link className='blogs' to={'/blogs'}>BLOGS</Link>
                <Link className='about' to={'/about'}>ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;