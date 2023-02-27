import "./list.css";

import React, { useState } from "react";

function emptyListObject() {
  return {
    id: crypto.randomUUID(),
    length: { ft: "", in: "" },
    breadth: { ft: "", in: "" },
    title: "",
  };
}

export const List = () => {
  const [list, setList] = useState([emptyListObject()]);
  const updateTitle = (value, id) => {
    setList([...list.map((e) => (e.id !== id ? e : { ...e, title: value }))]);
  };

  const updateLength = (value, id, isft = true) => {
    const newKey = isft ? "ft" : "in";
    setList([
      ...list.map((e) =>
        e.id !== id ? e : { ...e, length: { ...e.length, [newKey]: value } }
      ),
    ]);
  };

  const updateBreadth = (value, id, isft = true) => {
    const newKey = isft ? "ft" : "in";
    setList([
      ...list.map((e) =>
        e.id !== id ? e : { ...e, breadth: { ...e.breadth, [newKey]: value } }
      ),
    ]);
  };

  const removeItem = (id) => {
    const newList = list.filter((e) => e.id !== id);
    setList([...newList]);
  };

  return (
    <div>
      <button onClick={() => setList([...list, emptyListObject()])}>
        Add One
      </button>
      <div>
        <table>
          <thead>
            <td>Sr. No</td>
            <td>Title</td>
            <td>Length</td>
            <td>Breadth</td>
            <td>Total</td>
          </thead>
          <tbody>
            {...list.map((e, i) =>
              ListRow({
                ...e,
                updateTitle,
                updateLength,
                updateBreadth,
                idx: i,
                removeItem,
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const ListRow = ({
  length,
  breadth,
  title,
  id,
  updateTitle,
  updateLength,
  updateBreadth,
  idx,
  removeItem,
}) => {
  return (
    <tr key={id} className="table__row">
      <td>{idx + 1}</td>
      <td className="input__box">
        <input
          type="text"
          value={title}
          onChange={(e) => updateTitle(e.target.value, id)}
        ></input>
      </td>
      <td className="input__box">
        <input
          type="number"
          value={length.ft}
          onChange={(e) => updateLength(e.target.value, id)}
          placeholder="ft"
        ></input>
        <input
          type="number"
          value={length.in}
          onChange={(e) => updateLength(e.target.value, id, false)}
          placeholder="in"
        ></input>
      </td>
      <td className="input__box">
        <input
          type="number"
          value={breadth.ft}
          onChange={(e) => updateBreadth(e.target.value, id)}
          placeholder="ft"
        ></input>
        <input
          type="number"
          value={breadth.in}
          onChange={(e) => updateBreadth(e.target.value, id, false)}
          placeholder="in"
        ></input>
      </td>
      <td></td>
      <td>
        <button onClick={() => removeItem(id)}>Remove</button>
      </td>
    </tr>
  );
};
