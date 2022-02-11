import React from "react";
import IMG from "../../images/img01.jpg"

export const ProductList = () => {
  return (
    <>
      <h1 className="title"> PRODUCTS</h1>
      <div className="products">
        <div className="product">
          <a href="#">
          <div className="product-img">
            <img src={IMG} alt=""/>
          </div> 
          </a>
          <div className="product-footer">
            <h3> Title</h3>
            <p> Category</p>
            <p className="price">$320</p>
        </div>
        <div className="buttons">
          <button className="btn"> Add to Cart</button>
        </div>
        <div>
          <a href="#" className="btn"> View </a>
        </div>
        </div>
      </div>    
    </>
    
  );
};