import React, { useState } from "react";
import "./Body.css";
import Card from "../Card/Card";

const Body = ({ searchValue }) => {
  const cardItems = [
    {
      title: "Boiled Eggs",
      tag: "Breakfast",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      image: "../public/images/egg.jpg",
      price: "$10.00",
    },
    {
      title: "Ramen",
      tag: "Dinner",

      description:
        "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      image: "../public/images/rame.jpg",
      price: "$25.00",
    },
    {
      title: "Grilled Chicken",
      tag: "Lunch",

      description:
        "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      image: "../public/images/chicken.png",
      price: "$45.00",
    },
    {
      title: "Cake",
      tag: "Breakfast",

      description:
        "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      image: "../public/images/cake.png",
      price: "$18.00",
    },
    {
      title: "Burger",
      tag: "Dinner",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      image: "../public/images/burger.png",
      price: "$23.00",
    },
    {
      title: "Pancake",
      tag: "Breakfast",
      description:
        "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      image: "../public/images/pancake.jpg",
      price: "$25.00",
    },
  ];
  const filteredItems = cardItems.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  // Filter card items based on search input
  return (
    <div className="body">
      <div className="container">
        <div className="card-list">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              tag={item.tag}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
        {filteredItems.length === 0 && (
          <p className="no-results">No items match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
