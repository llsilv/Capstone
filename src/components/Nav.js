import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Asset 16@4x.png";
function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Little Lemon logo" />
      </Link>
      <ul>
        <li>
          <Link to="/" className="navbarButton">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/booking" className="navbarButton">
            <p>Book a Table</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
