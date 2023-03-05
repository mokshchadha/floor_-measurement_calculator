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
  displayLength,
  displayBreadth,
  lengthStr,
  breadthStr,
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
          type="text"
          value={lengthStr}
          onChange={(e) => updateLength(e.target.value, id)}
          placeholder="ft"
        ></input>
        <span>{displayLength}</span>
      </td>
      <td>*</td>
      <td className="input__box">
        <input
          type="number"
          value={breadthStr}
          onChange={(e) => updateBreadth(e.target.value, id)}
          placeholder="ft"
        ></input>
        <span>{displayBreadth}</span>
      </td>
      <td>{total}</td>
      <td>
        <button onClick={() => removeItem(id)}>Remove</button>
      </td>
    </tr>
  );
};
