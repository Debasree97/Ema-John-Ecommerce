import React from "react";

const Review = (props) => {
  const { price, name, seller, quantity, key } = props.product;
  return (
    <div>
      <div className="product-total-container">
        <p style={{ color: "blue" }}>{name}</p>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <button
          onClick={() => {
            props.handleRemove(key);
          }}
          className="btn"
        >
          Remove
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Review;
