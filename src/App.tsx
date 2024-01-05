import "./App.css";
import RecursiveComponent, { myObject } from "./components/RecursiveComponent";

function App() {
  return (
    <ul>
      <RecursiveComponent data={myObject} />
    </ul>
  );
}

export default App;
