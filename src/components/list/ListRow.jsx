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
  total,
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
      <td>{total}</td>
      <td>
        <button onClick={() => removeItem(id)}>Remove</button>
      </td>
    </tr>
  );
};
