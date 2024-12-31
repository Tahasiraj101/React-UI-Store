import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './fotter.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-flex">
                    <div className="footer-logo">
                        <Link to="/" className="logo-link">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="logo-img"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="footer-grid">
                        <div>
                            <h2 className="footer-heading">Resources</h2>
                            <ul className="footer-links">
                                <li className="footer-item">
                                    <Link to="/" className="footer-link">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="footer-link">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="footer-heading">Follow us</h2>
                            <ul className="footer-links">
                                <li className="footer-item">
                                    <a
                                        href="https://github.com/Tahasiraj101"
                                        className="footer-link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li className='Dicord'>
                                    <a href="https://discord.com/channels/@me"> Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="footer-heading">Legal</h2>
                            <ul className="footer-links">
                                <li className="footer-item">
                                    <Link to="#" className="footer-link">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="footer-link">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="footer-divider" />
                <div className="footer-bottom">
                    <span className="footer-text">
                        © 2024
                        <a href="https://discord.com/channels/@me" className="footer-link">
                            TahaSiraj
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="footer-social">
                        <Link to="#" className="social-link">
                            <svg className="social-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        {/* Other social links go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
