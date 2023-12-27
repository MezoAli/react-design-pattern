const classNames = {
  primary: "primary",
  secondary: "secondary",
  teritary: "teritary",
};

type TestTypeProps = {
  variant: keyof typeof classNames;
};

const TestTypes = ({ variant = "primary" }: TestTypeProps) => {
  return <div className={classNames[variant]}></div>;
};

export default TestTypes;
