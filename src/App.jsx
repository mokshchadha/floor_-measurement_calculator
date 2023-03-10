import { List } from "./components/list/List";
import { Routes, Route } from "react-router-dom";
import { ReadOnlyList } from "./components/list/ReadOnlyList";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <h1 className="main__heading">Measurement Calculator</h1>
            <List />
          </div>
        }
      />

      <Route path="/sheet" element={<ReadOnlyList />} />
    </Routes>
  );
}

export default App;
