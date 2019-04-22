import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            
          </li>
          <li>
            
          </li>
        </ul>
      </div>
      <span onClick={() => props.clickCount(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
