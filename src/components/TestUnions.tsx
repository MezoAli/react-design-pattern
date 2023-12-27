type MainMessage =
  | {
      message: "with-code";
      code: number;
    }
  | {
      message: "no-code";
      // data: {};
      data: Record<string, number>;
    };

type TestUnionsProps = MainMessage & {
  btnColor: string;
};

const TestUnions = () => {
  return (
    <div>
      <Alert message="with-code" code={122} btnColor="crimson" />
      <Alert message="no-code" btnColor="blue" data={{}} />
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
