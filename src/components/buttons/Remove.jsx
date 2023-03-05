import React from "react";
import "./buttons.css";

export const RemoveButton = ({ removeItem, id }) => {
  return <button onClick={() => removeItem(id)}>Remove</button>;
};
