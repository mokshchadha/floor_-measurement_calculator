import React from "react";
import ReactToPdf from "react-to-pdf";
import { getListFromLocalStorage } from "../../repo";
import { convertAreaInInchesToDisplayAr } from "./common";

function totalOftheList(list) {
  console.log({ list });
  const totalAreaInInches = list
    .filter((e) => e.areaInInches)
    .reduce((a, e) => a + parseInt(e.areaInInches), 0);
  console.log({ totalAreaInInches });
  const displayAr = convertAreaInInchesToDisplayAr(totalAreaInInches);
  return displayAr;
}

export const ReadOnlyList = () => {
  const list = getListFromLocalStorage();
  const ref = React.createRef();

  if (list && list.length > 0)
    return (
      <div>
        <div className="row">
          <ReactToPdf
            targetRef={ref}
            filename={`measurement_sheet_${new Date().getTime()}.pdf`}
          >
            {({ toPdf }) => (
              <button className="btn" onClick={() => toPdf()}>
                Download PDF
              </button>
            )}
          </ReactToPdf>
        </div>
        <div style={{ width: "100%" }}>
          <table ref={ref} className="table__readonly">
            <thead className="thead__readonly">
              <tr className="table_heading_row">
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
              <tr>
                <td>{""}</td>
                <td>{""}</td>
                <td>{""}</td>
                <td>
                  <b>{"TOTAL : "}</b>
                </td>
                <td>{totalOftheList(list)}</td>
              </tr>
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
