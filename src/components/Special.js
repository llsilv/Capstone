import React from "react";
import salad from "../assets/images/salad.jpg";
import bruschetta from "../assets/images/bruschetta.jpg";
import lemon from "../assets/images/lemon.jpg";

const specialsData = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    img: salad,
    desc: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$9.99",
    img: bruschetta,
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$6.99",
    img: lemon,
    desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Special() {
  return (
    <section className="specials">
      <h2>This weeks specials!</h2>
      <div className="specials-list">
        {specialsData.map((item) => (
          <div key={item.id} className="specialCard">
            <img src={item.img} alt={item.name} />
            <div className="itemTitle">
              <h3 className="itemName">{item.name}</h3>
              <p className="itemPrice">{item.price}</p>
            </div>
            <p className="itemDesc">{item.desc}</p>
            <h4>Order a dilvery 🛵</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Special;
