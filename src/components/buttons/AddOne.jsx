import React from "react";

import { emptyListObject } from "../../utils";

export const AddOneButton = ({ list, setList }) => {
  return (
    <button className="add" onClick={() => setList([...list, emptyListObject()])}>
      Add One
    </button>
  );
};
