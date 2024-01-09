import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
function App() {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // useLayoutEffect(() => {
  useEffect(() => {
    if (buttonRef.current === null || !show) {
      return setTop(0);
    }
    const obj = buttonRef?.current?.getBoundingClientRect();
    setTop(obj.bottom + 30);
  }, [show]);

  const now = performance.now();
  while (now > performance.now() - 100) {}
  return (
    <>
      <button ref={buttonRef} onClick={() => setShow((i) => !i)}>
        show
      </button>
      {show && (
        <div
          style={{
            top: `${top}px`,
            backgroundColor: "red",
            padding: "20px",
            position: "absolute",
            width: "100%",
            display: "block",
          }}
        >
          some text
        </div>
      )}
    </>
  );
}

export default App;
