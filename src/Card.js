import React from "react";
import "./style.css";
function Card({ id, title, image }) {
  return (
    <div className="card">
      <img className="img" src={image} alt=""></img>
      <h4 className="text">{title}</h4>{" "}
    </div>
  );
}

export default Card;
