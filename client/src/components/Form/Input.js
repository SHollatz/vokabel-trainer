import React from "react";
import "./Input.css";

export const Input = props => (
  <div>
    <input type="text" className="input" {...props} />
  </div>
);
