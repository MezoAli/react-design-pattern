import "./App.css";
import CompoundComponent from "./components/CompoundComponent";

function App() {
  return (
    <CompoundComponent>
      <CompoundComponent.Header>Iam Header</CompoundComponent.Header>
      <CompoundComponent.Body>Iam Body</CompoundComponent.Body>
      <CompoundComponent.Footer>Iam Footer</CompoundComponent.Footer>
    </CompoundComponent>
  );
}

export default App;
