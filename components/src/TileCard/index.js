import React from "react";
import "./style.css";

function TileCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} />
      </div>
    </div>

    <div>
    <span> onClick = "shuffleImages()"> </span>
    </div>
  // ?????????????????    
  )
    }
    
export default TileCard;