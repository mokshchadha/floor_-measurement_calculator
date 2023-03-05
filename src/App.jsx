import "./App.css";
import { List } from "./components/list/List";

function App() {
  return (
    <div className="App">
      <h1 className="main__heading">Measurement Calculator</h1>
      <div className="card">
        <List />
      </div>
    </div>
  );
}

export default App;
