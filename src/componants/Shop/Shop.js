import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilities/fakedb";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import UseCart from "../../Hooks/UseCart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = UseCart(products);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const exist = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exist) {
      const remainingProduct = cart.filter((pd) => pd.key !== product.key);
      exist.quantity = exist.quantity + 1;
      newCart = [...remainingProduct, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };

  return (
    <div className="container">
      <div className="product-list-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.key}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="product-total-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="btn">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
