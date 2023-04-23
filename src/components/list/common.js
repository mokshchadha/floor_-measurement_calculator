export const _1_FT_TO_INCHES = 12;

export function displayMeasurement(value, isValid) {
  if (!isValid) return "";
  const [ft, inch] = value.split(".");
  if (ft.trim() === "") return "";
  return `${ft ?? ""}' ${inch ?? ""}"`;
}

export function isMeasurementValid(measurement) {
  const ft = parseFloat(measurement.ft);
  const inch = parseFloat(measurement.in);
  if (!measurement.in && parseInt(measurement.ft) > 0) return true; // even if ft is filled its okay
  return !isNaN(ft) && !isNaN(inch);
}

export function convertToInches(measurement) {
  const ftToInches = parseFloat(measurement.ft) * _1_FT_TO_INCHES;
  const inchesToFloat = isNaN(parseFloat(measurement.in))
    ? 0
    : parseFloat(measurement.in);

  return ftToInches + inchesToFloat;
}

export function computeTotal(item) {
  const { length, breadth, isBreadthValid, isLengthValid } = item;
  if (
    isBreadthValid &&
    isLengthValid &&
    isMeasurementValid(length) &&
    isMeasurementValid(breadth)
  ) {
    const areaInInches = areaInInchesOfItem(item);
    return convertAreaInInchesToDisplayAr(areaInInches);
  }

  return "";
}

export function areaInInchesOfItem(item) {
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

    return areaInInches;
  }
  return "";
}

export function convertAreaInInchesToDisplayAr(areaInInches) {
  if (areaInInches) {
    const inchesSquare = _1_FT_TO_INCHES * _1_FT_TO_INCHES;
    const precise = (areaInInches / inchesSquare).toFixed(5);
    const front = precise.split(".")[0];
    const back = precise.split(".")?.[1];
    const only2InBack = back ? back.slice(0, 2) : "00";
    const dispalyAr = front + "." + only2InBack;
    return `${dispalyAr}`;
  }
  return "";
}
