import React from "react";

import { emptyListObject } from "../../utils";

export const AddOneButton = ({ list, setList }) => {
  return (
    <button
      className="btn"
      onClick={() => setList([...list, emptyListObject()])}
      style={{ backgroundColor: list.length === 35 ? "whitesmoke" : "blue" }}
      disabled={list.length === 35}
    >
      Add One
    </button>
  );
};
