import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 sol-sm-12">
                            <div className="email">
                                <figure className="mb-0 emailicon">
                                    <img src="assets/images/header-emailicon.png" alt="" className="img-fluid" />
                                </figure>
                                <a href="mailto:support@ravelmobile.com" className="mb-0 text-size-16 text-white">support@ravelmobile.com</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 sol-sm-12 d-md-block d-none">
                            <div className="mb-0 social-icons">
                                <ul className="mb-0 list-unstyled">
                                    <li>Follow us on:</li>
                                    <li>
                                        <a href="/"><i className="fa-brands fa-facebook-f" /></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="fa-brands fa-twitter" /></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="fa-brands fa-pinterest-p" /></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="fa-brands fa-instagram" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <nav className="navbar position-relative navbar-expand-lg navbar-light">
                        <NavLink className="navbar-brand" to="/">
                            <figure className="mb-0">
                                <img src="assets/images/banner-logo.png" alt="" className="img-fluid" />
                            </figure>
                        </NavLink>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/service">Service</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/sign-up"><i className="fa-solid fa-user-lock"></i>Account</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
        

    );
};

export default Header;
