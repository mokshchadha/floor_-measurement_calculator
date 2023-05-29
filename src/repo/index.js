export function getListFromLocalStorage() {
  const listStr = localStorage.getItem("list");
  return listStr ? JSON.parse(listStr) : [];
}

export function storeInLocalStorage(list) {
  localStorage.setItem("list", JSON.stringify(list));
}

export function emptyLocalStorage() {
  localStorage.setItem("list", JSON.stringify([]));
}
