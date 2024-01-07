import { useState } from "react";
import "./App.css";
import ModalPortal from "./components/ModalProtal";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>show model</button>
      <ModalPortal show={show} setShow={setShow}>
        <h1>hi from model</h1>
      </ModalPortal>
    </>
  );
}

export default App;
