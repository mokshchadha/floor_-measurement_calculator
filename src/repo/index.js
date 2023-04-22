export function getListFromLocalStorage() {
  const listStr = localStorage.getItem("list");
  return JSON.parse(listStr);
}

export function storeInLocalStorage(list) {
  localStorage.setItem("list", JSON.stringify(list));
}
