import React from "react";
import "./wordCard.css";

const wordCard = props => (
  <button className = {props.className}
          id={props.id} 
          article={props.article} 
          partner={props.partner}
          onClick={props.onClick}>{props.word}</button>
);

export default wordCard;
