import React, { useState } from "react";
import InventoryConditionalRendering from "../InventoryConditionalRendering/InventoryConditionalRendering";

const Inventory = () => {
  const [familiar, setFamiliar] = useState(false);
  return (
    <div>
      <h2>Take Inventory of Your Stock</h2>
      <hr />
      <h3>Do You Want To Take Inventory?</h3>
      <button onClick={() => setFamiliar(!familiar)}>Toggle</button>
      <InventoryConditionalRendering familiar={familiar}></InventoryConditionalRendering>
    </div>
  );
};

export default Inventory;
