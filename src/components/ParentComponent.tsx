import mitt from "mitt";
import Buttons from "./Buttons";
import Counter from "./Counter";

export const emitter = mitt();

const ParentComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "50%",
        margin: "20px auto",
      }}
    >
      <Buttons />
      <Counter />
    </div>
  );
};

export default ParentComponent;
