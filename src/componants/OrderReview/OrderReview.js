import React from "react";
import { useHistory } from "react-router";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import UseCart from "../../Hooks/UseCart";
import UseProducts from "../../Hooks/UseProducts";
import Review from "../Review/Review";

const OrderReview = () => {
  const [useProduct] = UseProducts();
  const [cart, setCart] = UseCart(useProduct);

  const history = useHistory();

  const handlePlaceOder = () => {
    history.push("/placeorder");
    setCart([]);
    clearTheCart();
  };

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };
  return (
    <div className="container">
      <div className="product-list-container">
        {cart.map((product) => (
          <Review
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></Review>
        ))}
      </div>
      <div className="product-total-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOder} className="btn">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
