import "./list.css";

import React, { useEffect, useState } from "react";
import { ListRow } from "./ListRow";
import { emptyListObject } from "../../utils";
import { AddOneButton } from "../buttons/AddOne";
import { getListFromLocalStorage, storeInLocalStorage } from "../../repo";
import {
  _1_FT_TO_INCHES,
  displayMeasurement,
  computeTotal,
  areaInInchesOfItem,
} from "./common";

export const EditableList = ({ hideEditPanel }) => {
  const [list, setList] = useState([emptyListObject()]);
  const updateTitle = (value, id) => {
    setList([...list.map((e) => (e.id !== id ? e : { ...e, title: value }))]);
  };

  useEffect(() => {
    setList[getListFromLocalStorage()];
  }, []);

  const updateLength = (value, id) => {
    const item = list.find((e) => e.id === id);
    if (!item) return;

    const [ft, inch] = value.split(".");
    const isLengthValid = inch ? parseInt(inch) <= 11 : true;
    const displayLength = displayMeasurement(value, isLengthValid);
    const newItem = {
      ...item,
      length: { ft: ft, in: inch },
      lengthStr: value,
      isLengthValid,
      displayLength,
    };
    const total = computeTotal(newItem);
    const areaInInches = areaInInchesOfItem(newItem);
    setList([
      ...list.map((e) =>
        e.id !== id ? e : { ...newItem, total, areaInInches }
      ),
    ]);
    storeInLocalStorage([...list]);
  };

  const updateBreadth = (value, id) => {
    const item = list.find((e) => e.id === id);
    if (!item) return;

    const [ft, inch] = value.split(".");
    const isBreadthValid = inch ? parseInt(inch) <= 11 : true;

    const displayBreadth = displayMeasurement(value, isBreadthValid);

    const newItem = {
      ...item,
      breadth: { ft, in: inch },
      breadthStr: value,
      isBreadthValid,
      displayBreadth,
    };
    const total = computeTotal(newItem);
    const areaInInches = areaInInchesOfItem(newItem);

    setList([
      ...list.map((e) =>
        e.id !== id ? e : { ...newItem, total, areaInInches }
      ),
    ]);
    storeInLocalStorage([...list]);
  };

  const removeItem = (id) => {
    const newList = list.filter((e) => e.id !== id);
    setList([...newList]);
  };

  return (
    <div className="card">
      <div>
        <div>
          <button
            className="btn"
            onClick={() => {
              storeInLocalStorage([...list]);
              hideEditPanel();
            }}
          >
            Preview
          </button>
        </div>
        <div style={{}}>
          <div>
            <table>
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
        <AddOneButton list={list} setList={setList} />
      </div>
    </div>
  );
};
