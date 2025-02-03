import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button>
            <p>Reserve a Table</p>
          </button>
        </Link>
      </div>
      <img src={heroImg} alt="Example Food" />
    </section>
  );
}

export default Hero;
