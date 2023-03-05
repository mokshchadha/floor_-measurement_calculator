export function emptyListObject() {
  return {
    id: crypto.randomUUID(),
    title: "",
    total: "",
    length: { ft: "", in: "" },
    breadth: { ft: "", in: "" },
    lengthStr: "",
    breadthStr: "",
    displayLength: "",
    displayBreadth: "",
    isLengthValid: true,
    isBreadthValid: true,
  };
}
