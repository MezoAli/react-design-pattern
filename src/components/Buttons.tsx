import { emitter } from "./ParentComponent";

const Buttons = () => {
  const onIncrement = () => {
    emitter.emit("increment");
  };

  const onDecrement = () => {
    emitter.emit("decrement");
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button style={{ cursor: "pointer" }} onClick={onIncrement}>
        +
      </button>
      <button style={{ cursor: "pointer" }} onClick={onDecrement}>
        -
      </button>
    </div>
  );
};

export default Buttons;
