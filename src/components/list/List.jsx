import "./list.css";

import React, { useState } from "react";
import { ListRow } from "./ListRow";

function emptyListObject() {
  return {
    id: crypto.randomUUID(),
    length: { ft: "", in: "" },
    breadth: { ft: "", in: "" },
    title: "",
    total: "",
  };
}

export const List = () => {
  const [list, setList] = useState([emptyListObject()]);
  const updateTitle = (value, id) => {
    setList([...list.map((e) => (e.id !== id ? e : { ...e, title: value }))]);
  };

  const updateLength = (value, id, isft = true) => {
    const newKey = isft ? "ft" : "in";
    const item = list.find((e) => e.id === id);
    if (!item) return;

    setList([
      ...list.map((e) =>
        e.id !== id ? e : { ...e, length: { ...e.length, [newKey]: value } }
      ),
    ]);
  };

  const updateBreadth = (value, id, isft = true) => {
    const newKey = isft ? "ft" : "in";
    const item = list.find((e) => e.id === id);
    if (!item) return;
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
