import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="navbar-button">
            Home
          </Link>
        </li>
        <li>
          <Link to="/booking" className="navbar-button">
            Book a Table
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
