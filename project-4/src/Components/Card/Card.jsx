import React from "react";
import "./Card.css";

const Card = ({ title,tag , description, image, price }) => {
  return (
    <div className="card">
      <div className="img-container">
      <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="title">{title}</h3>
        <p className="dec">{description}</p>
        <div className="price-card">
        <p className="price">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
