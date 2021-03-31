import React from "react";
import "../style.css";
import BB1 from "../assets/images/bb1.jpg";

const Card = ({ character }) => {
  return (
    <div className="card">
      <img src={character.img} alt="bb" />
      <div className="info">
        <h3>Name:{character.name}</h3>
      </div>
    </div>
  );
};

export default Card;
