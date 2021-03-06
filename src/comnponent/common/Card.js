import React from "react";
import "./Card.css";

const Card = ({ name }) => {
  return (
    <div className="card">
      <div className="container">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
