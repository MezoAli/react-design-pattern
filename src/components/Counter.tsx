import { useEffect, useState } from "react";
import { emitter } from "./ParentComponent";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter((count) => count + 1);
  };
  const onDecrement = () => {
    setCounter((count) => count - 1);
  };

  useEffect(() => {
    emitter.on("increment", onIncrement);
    emitter.on("decrement", onDecrement);

    return () => {
      emitter.off("increment", onIncrement);
      emitter.off("decrement", onDecrement);
    };
  }, []);
  return (
    <div
      style={{
        width: "50%",
        margin: "20px auto",
        fontSize: "50px",
        textAlign: "center",
      }}
    >
      {counter}
    </div>
  );
};

export default Counter;
