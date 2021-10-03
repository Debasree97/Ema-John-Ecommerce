import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);
  const { name, seller, price, stock, img } = props.product;
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p style={{ color: "blue" }}>{name}</p>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn"
        >
          {element} <span style={{ marginLeft: "2px" }}>add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
