import React from "react";

import { emptyListObject } from "../../utils";

export const AddOneButton = ({ list, setList }) => {
  return (
    <button
      className="btn"
      onClick={() => setList([...list, emptyListObject()])}
    >
      Add One
    </button>
  );
};
