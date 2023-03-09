import { RemoveButton } from "../buttons/Remove";

export const ListRow = ({
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
      <td className="input__box title__input">
        <input
          type="text"
          value={title}
          onChange={(e) => updateTitle(e.target.value, id)}
        ></input>
      </td>
      <td className="input__box number__input">
        <input
          type="number"
          value={lengthStr}
          onChange={(e) => updateLength(e.target.value, id)}
          placeholder="ft"
        ></input>
        <span>{displayLength?.length > 0 ? `(${displayLength})` : ""}</span>
      </td>
      {/* <td className="multiplier">*</td> */}
      <td className="input__box number__input">
        <input
          type="number"
          value={breadthStr}
          onChange={(e) => updateBreadth(e.target.value, id)}
          placeholder="ft"
        ></input>
        <span>{displayBreadth?.length > 0 ? `( ${displayBreadth})` : ""}</span>
      </td>
      <td>
        <span className="total__text">{total}</span>
      </td>
      <td>
        <RemoveButton removeItem={removeItem} id={id} />
      </td>
    </tr>
  );
};
