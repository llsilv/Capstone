import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Asset 16@4x.png";
function Nav() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Little Lemon logo" />
      <ul>
        <li>
          <Link to="/" className="navbar-button">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/booking" className="navbar-button">
            <p>Book a Table</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
