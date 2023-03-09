import React from "react";
import ReactToPdf from "react-to-pdf";

export const ConvertToPdf = () => {
  const ref = React.createRef();

  return (
    <div>
      <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Convert To PDF</button>}
      </ReactToPdf>
    </div>
  );
};
