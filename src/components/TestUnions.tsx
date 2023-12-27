type TestUnionsProps =
  | {
      message: "with-code";
      code: number;
    }
  | {
      message: "no-code";
    };
const TestUnions = () => {
  return (
    <div>
      <Alert message="with-code" code={122} />
      <Alert message="no-code" />
    </div>
  );
};

const Alert = (props: TestUnionsProps) => {
  if (props.message === "with-code") {
    return (
      <div>
        <p>{props.message}</p>
        <p>{props.code}</p>
      </div>
    );
  } else {
    return <div>{props.message}</div>;
  }
};

export default TestUnions;
