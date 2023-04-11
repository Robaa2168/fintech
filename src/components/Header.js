import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef]);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 sol-sm-12">
              <div className="email">
                <figure className="mb-0 emailicon">
                  <img
                    src="assets/images/header-emailicon.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <a
                  href="mailto:support@ravelmobile.com"
                  className="mb-0 text-size-16 text-white"
                >
                  support@ravelmobile.com
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 sol-sm-12 d-md-block d-none">
              <div className="mb-0 social-icons">
                <ul className="mb-0 list-unstyled">
                  <li>Follow us on:</li>
                  <li>
                    <a href="/">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa-brands fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa-brands fa-instagram" />
                    </a>
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
                <img
                  src="assets/images/banner-logo.png"
                  alt=""
                  className="img-fluid"
                />
              </figure>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNav}
            >
              {isNavCollapsed ? (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000">
                  <path d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,8h18V6H3V8z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000">
                  <path d="M19,18H5v-2h14V18z M19,13H5v-2h14V13z M5,8v2h14V8H5z" />
                </svg>
              )}
            </button>
            <div
              ref={navRef}
              className={`navbar-collapse ${isNavCollapsed ? 'collapse' : ''}`}
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/service">
                    Service
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/pricing">
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/faq">
                    FAQ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" href="https://ravelmobile.com">
                    <i className="fa-solid fa-user-lock"></i>Account
                  </NavLink>
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