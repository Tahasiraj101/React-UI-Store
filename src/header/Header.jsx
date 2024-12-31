import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            alt="Logo"
                        />
                    </Link>
                    
                    <div className="nav-menu">
                        <ul className="nav-list">
                            <li>
                                <NavLink to="/" className='nav'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className='nav'>
                                    Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" className='nav'>
                                    Login
                                </NavLink> 
                            </li>
                        </ul>
                    </div>

                    <div className="buttons">
                        <Link to="#" className="login-btn">
                            Log in
                        </Link>
                        <Link to="#" className="get-started-btn">
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
