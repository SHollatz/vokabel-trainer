import React from "react";
import "./wordCard.css";



const wordCard = props => {
  // console.log("props ", props);
  // console.log("props.visibility ", props.visibility);
  return(
  <button className = {props.className}
          id={props.id} 
          name={props.name}
          article={props.article} 
          partner={props.partner}
          style={{visibility: "visible"}}
          word={props.word}
          onClick={props.onClick}>{props.word}</button>
);
  }
export default wordCard;
