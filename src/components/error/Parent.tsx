import { ErrorBoundry } from "../../lib/ErrorBoundry";
import Child from "./Child";

const Parent = () => {
  return (
    <div
      style={{ width: "50%", fontSize: "35px", margin: "40px auto" }}
      // onClick={() => console.log("outer parent")}
      onClickCapture={() => console.log("outer parent")}
    >
      iam parent
      <ErrorBoundry fallback={<h1>Error at child level</h1>}>
        <Child />
      </ErrorBoundry>
    </div>
  );
};

export default Parent;
