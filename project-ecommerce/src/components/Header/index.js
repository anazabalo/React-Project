import React from "react";
import Nike from "../../images/Nike.jpg";

export const Header = () => {
  return (
    <header>
      <a href="#">
        <div className="logo">
          <img src= {Nike} alt = "logo" width="150"/>
        </div>
      </a>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">PRODUCTS</a>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item-total">0</span>

      </div>
    </header>
    
  );
};