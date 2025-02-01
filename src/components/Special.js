import React from "react";
import salad from "../assets/images/salad.jpg";
import bruschetta from "../assets/images/bruschetta.jpg";
import lemon from "../assets/images/lemon.jpg";

const specialsData = [
  { id: 1, name: "Greek Salad", price: "$12.99", img: salad },
  { id: 2, name: "Bruschetta", price: "$9.99", img: bruschetta },
  { id: 3, name: "Lemon Dessert", price: "$6.99", img: lemon },
];

function Special() {
  return (
    <section className="specials">
      <h2>Our Specials</h2>
      <div className="specials-list">
        {specialsData.map((item) => (
          <div key={item.id} className="special">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Special;
