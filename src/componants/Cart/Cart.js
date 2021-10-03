import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let totalQuantity = 0;
  let newPrice = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    totalQuantity = totalQuantity + product.quantity;
    newPrice = product.price * product.quantity + newPrice;
  }
  return (
    <div>
      <div>
        <h3>Order Summary</h3>
        <p>Item Order: {totalQuantity}</p>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>Order Total: {newPrice}</p>
      </div>
      {props.children}
    </div>
  );
};

export default Cart;
