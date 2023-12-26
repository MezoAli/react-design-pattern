import Card from "./components/card";
import "./App.css";
import Button from "./components/button/button";

function App() {
  return (
    <main className="m-8">
      <Card color="brown">
        Welcome to a custom component!
        <p>Inside, we can have various elements.</p>
        <Card>
          <h2>Another custom component within.</h2>
        </Card>
        <Card>
          <h2 className="mb-4">
            A nested custom component with multiple elements.
          </h2>
          <p>This is the second element.</p>
        </Card>
      </Card>
      <Button onClick={() => console.log("Hi")}>Click Me</Button>
    </main>
  );
}

export default App;
