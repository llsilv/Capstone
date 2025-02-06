import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <br></br>
        <p className="heroDesc">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <br></br>
        <Link to="/booking">
          <button className="heroButton">
            <p>Reserve a Table</p>
          </button>
        </Link>
      </div>
      <img src={heroImg} alt="Example Food" />
    </section>
  );
}

export default Hero;
