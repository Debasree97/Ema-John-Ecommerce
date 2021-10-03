import React from "react";

const InventoryConditionalRendering = (props) => {
  const { familiar } = props;
  return (
    <div>
      <div>{familiar ? <p>Let's Do Inventory</p> : <p>Neh,Not Today</p>}</div>
    </div>
  );
};

export default InventoryConditionalRendering;
