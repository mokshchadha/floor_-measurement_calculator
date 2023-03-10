import React from "react";
import ReactToPdf from "react-to-pdf";

function getListFromLocalStorage() {
  const listStr = localStorage.getItem("list");
  return JSON.parse(listStr);
}

export const ReadOnlyList = () => {
  const list = getListFromLocalStorage();
  const ref = React.createRef();

  if (list && list.length > 0)
    return (
      <div>
        <div>
          <ReactToPdf
            targetRef={ref}
            filename={`measurement_sheet_${new Date().getTime()}.pdf`}
          >
            {({ toPdf }) => <button onClick={toPdf}>Download PDF</button>}
          </ReactToPdf>
        </div>
        <div>
          <table ref={ref} className="table__readonly">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Title</th>
                <th>Length</th>
                <th>Breadth</th>
                <th>Total Sq Ft</th>
              </tr>
            </thead>
            <tbody>
              {...list.map((e, i) =>
                ReadOnlyListRow({
                  ...e,
                  idx: i,
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  return <span>No items in the list</span>;
};

export const ReadOnlyListRow = ({
  idx,
  total,
  title,
  displayLength,
  displayBreadth,
}) => {
  return (
    <tr className="tr__readonly">
      <td>{idx + 1}</td>
      <td>{title}</td>
      <td>{displayLength}</td>
      <td>{displayBreadth}</td>
      <td>{total}</td>
    </tr>
  );
};
