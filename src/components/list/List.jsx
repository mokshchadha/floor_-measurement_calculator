import "./list.css";

import React, { useState } from "react";
import { ListRow } from "./ListRow";
import { emptyListObject } from "../../utils";
import { AddOneButton } from "../buttons/AddOne";

const _1_FT_TO_INCHES = 12;

function displayMeasurement(value, isValid) {
  if (!isValid) return "";
  const [ft, inch] = value.split(".");
  if (ft.trim() === "") return "";
  return `${ft ?? ""}' ${inch ?? ""}"`;
}

function isMeasurementValid(measurement) {
  const ft = parseFloat(measurement.ft);
  const inch = parseFloat(measurement.in);
  if (!isNaN(ft) && measurement?.in?.trim() == "") return true; // even if ft is filled its okay
  return !isNaN(ft) && !isNaN(inch);
}

function convertToInches(measurement) {
  const ftToInches = parseFloat(measurement.ft) * _1_FT_TO_INCHES;
  const inchesToFloat = isNaN(parseFloat(measurement.in))
    ? 0
    : parseFloat(measurement.in);

  return ftToInches + inchesToFloat;
}

function computeTotal(item) {
  const { length, breadth, isBreadthValid, isLengthValid } = item;

  if (
    isBreadthValid &&
    isLengthValid &&
    isMeasurementValid(length) &&
    isMeasurementValid(breadth)
  ) {
    const lengthInInches = convertToInches(length);
    const breadthInInches = convertToInches(breadth);

    const areaInInches = lengthInInches * breadthInInches;

    console.log({ areaInInches });
    const inchesSquare = _1_FT_TO_INCHES * _1_FT_TO_INCHES;

    const precise = (areaInInches / inchesSquare).toFixed(5);
    const front = precise.split(".")[0];
    const back = precise.split(".")[1];
    const only2InBack = back.slice(0, 2);
    const dispalyAr = front + "." + only2InBack;
    return `${dispalyAr} sq ft`;
  }

  return "";
}

export const List = () => {
  const [list, setList] = useState([emptyListObject()]);
  const updateTitle = (value, id) => {
    setList([...list.map((e) => (e.id !== id ? e : { ...e, title: value }))]);
  };

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
    setList([...list.map((e) => (e.id !== id ? e : { ...newItem, total }))]);
  };

  const updateBreadth = (value, id) => {
    const item = list.find((e) => e.id === id);
    if (!item) return;

    const [ft, inch] = value.split(".");
    const isBreadthValid = parseInt(inch) <= 11;

    const displayBreadth = displayMeasurement(value, isBreadthValid);

    const newItem = {
      ...item,
      breadth: { ft, in: inch },
      breadthStr: value,
      isBreadthValid,
      displayBreadth,
    };
    const total = computeTotal(newItem);
    setList([...list.map((e) => (e.id !== id ? e : { ...newItem, total }))]);
  };

  const removeItem = (id) => {
    const newList = list.filter((e) => e.id !== id);
    setList([...newList]);
  };

  return (
    <div className="card">
      <div>
        <div>
          <table>
            <thead>
              <td>Sr. No</td>
              <td>Title</td>
              <td>Length</td>
              <td></td>
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
      <AddOneButton list={list} setList={setList} />
    </div>
  );
};
