import React from "react";
import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <main className="confirmation">
      <h2>Your booking has been confirmed</h2>
      <p>We can't wait to see you!</p>
      <Link to="/" className="confirmationButton">
        <p>Back to Home</p>
      </Link>
    </main>
  );
}

export default ConfirmedBooking;
