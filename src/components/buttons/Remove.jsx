import React from "react";
import "./buttons.css";

export const Remove = ({ removeItem, id }) => {
  return <button onClick={() => removeItem(id)}>Remove</button>;
};
