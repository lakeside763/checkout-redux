import React from "react";

import { Link } from "react-router-dom";

import './header.styles.scss';

const Header = () => (
  <header className="header-bg">
    <div className="header container">
      <Link className="logo-div primary-color" to='/'>
        <span className="logo-bold">Checkout</span>
        <span className="logo-light">.com</span>
      </Link>
      <div className="menu-links">
        <div className="options">
          <button type="button" className="btn info-btn">
            Cart
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
