import { useEffect, useState } from "react";

const UseProducts = () => {
  const [useProduct, setUseProduct] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setUseProduct(data));
  }, []);
    return [useProduct];
};

export default UseProducts;
