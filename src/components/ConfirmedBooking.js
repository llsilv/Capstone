import React from "react";
import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <div className="confirmation">
      <h2>Your booking is confirmed </h2>
      <p>We can't wait to see you!</p>
      <Link to="/" className="navbar-button">
        <p>Back to Home</p>
      </Link>
    </div>
  );
}

export default ConfirmedBooking;
