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
        <div className="title__text_box">
          <input
            type="text"
            value={title}
            onChange={(e) => updateTitle(e.target.value, id)}
          ></input>
        </div>
      </td>
      <td className="input__box number__input">
        <div className="input__and__span">
          <input
            type="number"
            value={lengthStr}
            onChange={(e) => updateLength(e.target.value, id)}
            placeholder="ft"
          ></input>
          <span className="span__display_measurement">
            {displayLength?.length > 0 ? `(${displayLength})` : ""}
          </span>
        </div>
      </td>

      <td className="input__box number__input">
        <div className="input__and__span">
          <input
            type="number"
            value={breadthStr}
            onChange={(e) => updateBreadth(e.target.value, id)}
            placeholder="ft"
          ></input>
          <span className="span__display_measurement">
            {displayBreadth?.length > 0 ? `( ${displayBreadth})` : ""}
          </span>
        </div>
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
