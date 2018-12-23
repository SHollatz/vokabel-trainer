import React from "react";
import "./ResultsTable.css";

const ResultsTable = props => {
  if (props.pairs[0]) {
    return (
      <div className="results">
        <h1>Results</h1>
        {props.pairs.map((pair, index) => (
          <h2 
          key={index}
          >{pair}</h2>
        ))}
      </div>
    );
  } else {
    return (
      <div className="results">
        <h1>Results:</h1>
      </div>
    )
  }

}

export default ResultsTable;