import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button>Reserve a Table</button>
        </Link>
      </div>
      <img src={heroImg} alt="Example Food" />
    </section>
  );
}

export default Hero;
