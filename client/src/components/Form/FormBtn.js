import React from "react";
import "./FormBtn.css"

export const FormBtn = props => (
  <button {...props} className="submit-button">
    {props.children}
  </button>
);
