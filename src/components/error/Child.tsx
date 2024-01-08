const Child = () => {
  //   throw new Error("error occured in child");
  return (
    <div
      style={{ margin: "40px 0 0 0" }}
      // onClick={() => console.log("inner child")}
      onClickCapture={() => console.log("inner child")}
    >
      iam child component
    </div>
  );
};

export default Child;
