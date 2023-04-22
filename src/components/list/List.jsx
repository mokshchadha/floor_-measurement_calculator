import "./list.css";

import React, { useState } from "react";
import { EditableList } from "./EditableList";
import { ReadOnlyList } from "./ReadOnlyList";

export const List = () => {
  const [mode, setMode] = useState("write");
  return (
    <div>
      <div style={{ display: mode === "write" ? "block" : "none" }}>
        <EditableList hideEditPanel={() => setMode("read")} />
      </div>
      <div style={{ display: mode === "read" ? "block" : "none" }}>
        <button className="btn" onClick={() => setMode("write")}>
          Go Back
        </button>
        <ReadOnlyList />
      </div>
    </div>
  );
};
