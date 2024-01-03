import { useState } from "react";
import "./App.css";
import ControlledModal from "./components/ControlledModal";

const Message = () => {
  const message = window.localStorage.getItem("test");
  return <h1>{message}</h1>;
};

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => setShow(true)}>Show Modal</button>
      <ControlledModal show={show} setShow={setShow}>
        <Message />
      </ControlledModal>
    </>
  );
}

export default App;
