import React from "react";

import { emptyListObject } from "../../utils";

export const AddOneButton = ({ list, setList }) => {
  return (
    <button
      className="btn"
      onClick={() => setList([...list, emptyListObject()])}
      style={{
        backgroundColor: list.length === 35 ? "whitesmoke" : "#28A0E5",
        marginTop: "10px",
      }}
      disabled={list.length === 35}
    >
      Add One
    </button>
  );
};
